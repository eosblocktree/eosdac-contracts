// =====================================================
// WARNING: GENERATED FILE
//
// Any changes you make will be overwritten by Lamington
// =====================================================

import { Account, Contract, GetTableRowsOptions, ActorPermission, ExtendedAsset, ExtendedSymbol, TableRowsResult } from 'lamington';

// Table row types
export interface DacproposalsArbapprove {
	arbitrator: string|number;
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsCancel {
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsClearexpprop {
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsComment {
	commenter: string|number;
	proposal_id: number;
	comment: string;
	comment_category: string;
	dac_id: string|number;
}

export interface DacproposalsCompletework {
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsConfig {
	proposal_threshold: number;
	finalize_threshold: number;
}

export interface DacproposalsCreateprop {
	proposer: string|number;
	title: string;
	summary: string;
	arbitrator: string|number;
	pay_amount: ExtendedAsset;
	content_hash: string;
	id: number;
	category: number;
	job_duration: number;
	approval_duration: number;
	dac_id: string|number;
}

export interface DacproposalsDelegatecat {
	custodian: string|number;
	category: number;
	delegatee_custodian: string|number;
	dac_id: string|number;
}

export interface DacproposalsDelegatevote {
	custodian: string|number;
	proposal_id: number;
	delegatee_custodian: string|number;
	dac_id: string|number;
}

export interface DacproposalsFinalize {
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsProposal {
	key: number;
	proposer: string|number;
	arbitrator: string|number;
	content_hash: string;
	pay_amount: ExtendedAsset;
	state: number;
	expiry: Date;
	job_duration: number;
	category: number;
}

export interface DacproposalsProposalvote {
	vote_id: number;
	voter: string|number;
	proposal_id: string;
	category_id: string;
	vote: string;
	delegatee: string;
	comment_hash: string;
}

export interface DacproposalsStartwork {
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsUndelegateca {
	custodian: string|number;
	category: number;
	dac_id: string|number;
}

export interface DacproposalsUpdallprops {
	dac_id: string|number;
}

export interface DacproposalsUpdateconfig {
	new_config: string;
	dac_id: string|number;
}

export interface DacproposalsUpdpropvotes {
	proposal_id: number;
	dac_id: string|number;
}

export interface DacproposalsVoteprop {
	custodian: string|number;
	proposal_id: number;
	vote: number;
	dac_id: string|number;
}

export interface Dacproposals extends Contract {
	// Actions
	arbapprove(arbitrator: string|number, proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	cancel(proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	clearexpprop(proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	comment(commenter: string|number, proposal_id: number, comment: string, comment_category: string, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	completework(proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	createprop(proposer: string|number, title: string, summary: string, arbitrator: string|number, pay_amount: ExtendedAsset, content_hash: string, id: number, category: number, job_duration: number, approval_duration: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	delegatecat(custodian: string|number, category: number, delegatee_custodian: string|number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	delegatevote(custodian: string|number, proposal_id: number, delegatee_custodian: string|number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	finalize(proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	startwork(proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	undelegateca(custodian: string|number, category: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	updallprops(dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	updateconfig(new_config: DacproposalsConfig, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	updpropvotes(proposal_id: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	voteprop(custodian: string|number, proposal_id: number, vote: number, dac_id: string|number, options?: { from?: Account, auths?: ActorPermission[] }): Promise<any>;
	
	// Tables
	configTable(options?: GetTableRowsOptions): Promise<TableRowsResult<DacproposalsConfig>>;
	proposalsTable(options?: GetTableRowsOptions): Promise<TableRowsResult<DacproposalsProposal>>;
	propvotesTable(options?: GetTableRowsOptions): Promise<TableRowsResult<DacproposalsProposalvote>>;
}

