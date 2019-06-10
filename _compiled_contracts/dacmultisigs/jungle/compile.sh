#!/usr/bin/env bash

source `dirname $BASH_SOURCE`/../common.sh
mkdir `dirname $BASH_SOURCE`/$CONTRACT
eosio-cpp -DMSIGCONTRACT=eosiomsigold -o `dirname $BASH_SOURCE`/$CONTRACT/$CONTRACT.wasm $CONTRACT.cpp -I.
