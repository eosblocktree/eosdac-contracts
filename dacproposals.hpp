#include <eosiolib/multi_index.hpp>
#include <eosiolib/singleton.hpp>
#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp> 

using namespace eosio;
using namespace std;

CONTRACT dacproposals : public contract {
    enum VoteType {
        proposal_approve, 
        // a vote type to indicate a custodian's denial of a worker proposal.
        proposal_deny
    };

    enum ProposalState {  
        pending_approval = 0, 
        work_in_progress
    };

    TABLE configtype {
            name service_account;
            uint16_t proposal_threshold = 7;
            uint16_t proposal_approval_threshold_percent = 50;
    };

    typedef eosio::singleton<"configtype"_n, configtype> configs_table;

public:

    dacproposals( name receiver, name code, datastream<const char*> ds )
         : contract(receiver, code, ds), 
         proposals(receiver, receiver.value),
         prop_votes(receiver, receiver.value),
         configs(receiver, receiver.value) {}

    ACTION createprop(name proposer, string title, string summary, name arbitrator, asset pay_amount, string content_hash);
    ACTION voteprop(name custodian, uint64_t proposal_id, uint8_t vote);
    ACTION startwork(name proposer, uint64_t proposal_id);
    ACTION cancel(name proposer, uint64_t proposal_id);
    ACTION updateconfig(configtype new_config);

private:

    configs_table configs;

    TABLE proposal {
        uint64_t key;
        name proposer;
        name arbitrator;
        string content_hash; 
        asset pay_amount;
        uint8_t state;

        uint64_t primary_key() const { return key; }
        uint64_t proposer_key() const { return proposer.value; }
        uint64_t arbitrator_key() const { return arbitrator.value; }
};

    typedef eosio::multi_index<"proposals"_n, proposal,
    eosio::indexed_by<"proposer"_n, eosio::const_mem_fun<proposal, uint64_t, &proposal::proposer_key>>,
    eosio::indexed_by<"arbitrator"_n, eosio::const_mem_fun<proposal, uint64_t, &proposal::arbitrator_key>>
    > proposal_table;

    proposal_table proposals;

    TABLE proposalvote {
        uint64_t vote_id;
        uint64_t proposal_id;
        name voter;
        uint8_t vote;
        string comment_hash;

        uint64_t primary_key() const { return vote_id; }
        uint64_t proposal_key() const { return proposal_id; }
        uint64_t voter_key() const { return voter.value; }
        uint128_t get_prop_and_voter() const { return combine_ids(proposal_id, voter.value); }
    };

    typedef eosio::multi_index<"propvotes"_n, proposalvote,
    indexed_by<"voter"_n, eosio::const_mem_fun<proposalvote, uint64_t, &proposalvote::voter_key>>,
    indexed_by<"proposal"_n, eosio::const_mem_fun<proposalvote, uint64_t, &proposalvote::proposal_key>>,
    indexed_by<"propandvoter"_n, eosio::const_mem_fun<proposalvote, uint128_t, &proposalvote::get_prop_and_voter>>
    > proposal_vote_table;

    proposal_vote_table prop_votes;

    // concatenation of ids example
    static const uint128_t combine_ids(const uint64_t &x, const uint64_t &y) {
        return (uint128_t{x} << 64) | y;
    }

    configtype current_configs() {
        configtype conf = configs.get_or_default(configtype());
        configs.set(conf, _self);
        return conf;
    }
};