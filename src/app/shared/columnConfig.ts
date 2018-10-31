import {
	Injectable
  } from '@angular/core';
 
@Injectable()
export class ColumnConfig {
    columnConfig = [{
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "term_id",
         "display_column_name": "ATM ID",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "acceptorname",
         "display_column_name": "Acceptor Name",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "location",
         "display_column_name": "Location",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "tot_cash",
         "display_column_name": "Total Cash",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "cassette1",
         "display_column_name": "Cassette Balance 1",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "cassette2",
         "display_column_name": "Cassette Balance 2",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "cassette3",
         "display_column_name": "Cassette Balance 3",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOMH",
         "table_column": "cassette4",
         "display_column_name": "Cassette Balance 4",
         "table_name": "cash_balance_file_bomh"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "BOMH",
         "table_column": "atm_id",
         "display_column_name": "ATM ID",
         "table_name": "cash_dispense_file_bomh"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "BOMH",
         "table_column": "location",
         "display_column_name": "Location",
         "table_name": "cash_dispense_file_bomh"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "BOMH",
         "table_column": "amount_dispensed",
         "display_column_name": "Amount Dispensed",
         "table_name": "cash_dispense_file_bomh"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "group_name",
         "display_column_name": "Group Name",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "termid",
         "display_column_name": "ATM ID",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "location",
         "display_column_name": "Location",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "currbalcass1",
         "display_column_name": "Current Balance 1",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "ccurrbalcass2",
         "display_column_name": "Current Balance 2",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "currbalcass3",
         "display_column_name": "Current Balance 3",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "ALB",
         "table_column": "currbalcass4",
         "display_column_name": "Current Balance 4",
         "table_name": "cash_balance_file_alb"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "atmid",
         "display_column_name": "ATM ID",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "location",
         "display_column_name": "Location",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "state",
         "display_column_name": "State",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "atmstatus",
         "display_column_name": "ATM Status",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "msvendor",
         "display_column_name": "MSVendor",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "currentstatus",
         "display_column_name": "Current Status",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "regionname",
         "display_column_name": "Region Name",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "zone",
         "display_column_name": "Zone",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "address",
         "display_column_name": "Address",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop1bill",
         "display_column_name": "Hop 1 Bill",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop2bill",
         "display_column_name": "Hop 2 Bill",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop3bill",
         "display_column_name": "Hop 3 Bill",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop4bill",
         "display_column_name": "Hop 4 Bill",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop1begcash",
         "display_column_name": "Hop1 Beg Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop2begcash",
         "display_column_name": "Hop2 Beg Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop3begcash",
         "display_column_name": "Hop3 Beg Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop4begcash",
         "display_column_name": "Hop4 Beg Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop1endcash",
         "display_column_name": "Hop1 End Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop2endcash",
         "display_column_name": "Hop2 End Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop3endcash",
         "display_column_name": "Hop3 End Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop4endcash",
         "display_column_name": "Hop4 End Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop1cashdeposit",
         "display_column_name": "Hop1 Cash Deposit",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop2cashdeposit",
         "display_column_name": "Hop2 Cash Deposit",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop3cashdeposit",
         "display_column_name": "Hop3 Cash Deposit",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "hop4cashdeposit",
         "display_column_name": "Hop4 Cash Deposit",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "begcash",
         "display_column_name": "Beg Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "endcash",
         "display_column_name": "End Cash",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "cashout",
         "display_column_name": "Cash Out",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "cashincr",
         "display_column_name": "Cash in cr",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "timestamp",
         "display_column_name": "Time Stamp",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "lastwithdrawaltime",
         "display_column_name": "Last Withdrawal Time",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "lastsupervisorytime",
         "display_column_name": "Last Supervisory Time",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "lastdeposittranstime",
         "display_column_name": "Last Dep Tran time",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "lastadmintxntime",
         "display_column_name": "Last Admintxn Time",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOB",
         "table_column": "lastreversaltime",
         "display_column_name": "Last Reversal time",
         "table_name": "cash_balance_file_bob"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "institutionid",
         "display_column_name": "institution id",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "termid",
         "display_column_name": "ATM ID",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "location",
         "display_column_name": "Location",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_start1",
         "display_column_name": "Cash Start1",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_start2",
         "display_column_name": "Cash Start2",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_start3",
         "display_column_name": "Cash Start3",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_start4",
         "display_column_name": "Cash Start4",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_inc1",
         "display_column_name": "Cash Inc1",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_inc2",
         "display_column_name": "Cash Inc2",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_inc3",
         "display_column_name": "Cash Inc3",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_inc4",
         "display_column_name": "Cash Inc4",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_dec1",
         "display_column_name": "Cash Dec1",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_dec2",
         "display_column_name": "Cash Dec2",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_dec3",
         "display_column_name": "Cash Dec3",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_dec4",
         "display_column_name": "Cash Dec4",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_out1",
         "display_column_name": "Cash Out1",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_out2",
         "display_column_name": "Cash Out2",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_out3",
         "display_column_name": "Cash Out3",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_out4",
         "display_column_name": "Cash Out4",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_currbal1",
         "display_column_name": "Cash Currbal1",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_currbal2",
         "display_column_name": "Cash Currbal2",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_currbal3",
         "display_column_name": "Cash Currbal3",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "cash_currbal4",
         "display_column_name": "Cash Currbal4",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "termid1",
         "display_column_name": "Term id1",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "txn_date",
         "display_column_name": "Txn Date",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "txn_time",
         "display_column_name": "Txn Time",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "respcode",
         "display_column_name": "Respcode",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "BOI",
         "table_column": "pcode",
         "display_column_name": "Pcode",
         "table_name": "cash_balance_file_boi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "termloc",
         "display_column_name": "Term Loc",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "termcity",
         "display_column_name": "Term City",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "regn_id",
         "display_column_name": "Regn Id",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "network_link_status",
         "display_column_name": "Network Link Status",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "atm_status",
         "display_column_name": "Atm Status",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "out_time",
         "display_column_name": "Out Time",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_1",
         "display_column_name": "Err 1",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_2",
         "display_column_name": "Err 2",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_3",
         "display_column_name": "Err 3",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_4",
         "display_column_name": "Err 4",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_5",
         "display_column_name": "Err 5",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_6",
         "display_column_name": "Err 6",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_7",
         "display_column_name": "Err 7",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "err_8",
         "display_column_name": "Err 8",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop1cash",
         "display_column_name": "Hop1cash",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop1bill",
         "display_column_name": "Hop1bill",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop2cash",
         "display_column_name": "Hop2cash",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop2bill",
         "display_column_name": "Hop2bill",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop3cash",
         "display_column_name": "Hop3cash",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop3bill",
         "display_column_name": "Hop3bill",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop4cash",
         "display_column_name": "Hop4cash",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "hop4bill",
         "display_column_name": "Hop4bill",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "end_cash",
         "display_column_name": "End Cash",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CAB",
         "table_column": "timestamp",
         "display_column_name": "Timestamp",
         "table_name": "cash_balance_file_cab"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "sst",
         "display_column_name": "SST",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "cas_200",
         "display_column_name": "Cas 200",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "cas_100",
         "display_column_name": "Cas 100",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "cas_500",
         "display_column_name": "Cas 500",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "cas_2000",
         "display_column_name": "Cas 2000",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "remaining",
         "display_column_name": "Remaining",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CBI",
         "table_column": "location",
         "display_column_name": "Location",
         "table_name": "cash_balance_file_cbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "CORP",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_corp"
     },
     {
         "datafor": "CBR",
         "bankcode": "CORP",
         "table_column": "cash_100s",
         "display_column_name": "Cash 100s",
         "table_name": "cash_balance_file_corp"
     },
     {
         "datafor": "CBR",
         "bankcode": "CORP",
         "table_column": "cash_200s",
         "display_column_name": "Cash 200s",
         "table_name": "cash_balance_file_corp"
     },
     {
         "datafor": "CBR",
         "bankcode": "CORP",
         "table_column": "cash_500s",
         "display_column_name": "Cash 500s",
         "table_name": "cash_balance_file_corp"
     },
     {
         "datafor": "CBR",
         "bankcode": "CORP",
         "table_column": "cash_2000s",
         "display_column_name": "Cash 2000s",
         "table_name": "cash_balance_file_corp"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "stat",
         "display_column_name": "Stat",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "atm_stat",
         "display_column_name": "Atm Stat",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "fiid",
         "display_column_name": "Fiid",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_2",
         "display_column_name": "Err 2",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_3",
         "display_column_name": "Err 3",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_4",
         "display_column_name": "Err 4",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_5",
         "display_column_name": "Err 5",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_6",
         "display_column_name": "Err 6",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_7",
         "display_column_name": "Err 7",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "err_8",
         "display_column_name": "Err 8",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "cashchng",
         "display_column_name": "Cashchng",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "cashout",
         "display_column_name": "Cashout",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "cashrepl",
         "display_column_name": "Cashrepl",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "cashsply",
         "display_column_name": "Cashsply",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "end_cash",
         "display_column_name": "End Cash",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop4cash",
         "display_column_name": "Hop4cash",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop4bill",
         "display_column_name": "Hop4bill",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop5cash",
         "display_column_name": "Hop5cash",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop5bill",
         "display_column_name": "Hop5bill",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "amt_chk",
         "display_column_name": "Amt Chk",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "num_chk",
         "display_column_name": "Num Chk",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "amt_dep",
         "display_column_name": "Amt Dep",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "num_dep",
         "display_column_name": "Num Dep",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "intvdown",
         "display_column_name": "Intvdown",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "flt_cnt",
         "display_column_name": "Flt Cnt",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop1cash",
         "display_column_name": "Hop1cash",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop1bill",
         "display_column_name": "Hop1bill",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop2cash",
         "display_column_name": "Hop2cash",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop2bill",
         "display_column_name": "Hop2bill",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop3cash",
         "display_column_name": "Hop3cash",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "hop3bill",
         "display_column_name": "Hop3bill",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "linestat",
         "display_column_name": "Linestat",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "termloc",
         "display_column_name": "Termloc",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "termcity",
         "display_column_name": "Termcity",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "term_st",
         "display_column_name": "Term st",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "termst_x",
         "display_column_name": "Termst x",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "ownr",
         "display_column_name": "Ownr",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "row_cnt",
         "display_column_name": "Row Cnt",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "src_name",
         "display_column_name": "Src Name",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "spvr_on",
         "display_column_name": "Spvr On",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "brch_id",
         "display_column_name": "Brch Id",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "regn_id",
         "display_column_name": "Regn Id",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "timeofst",
         "display_column_name": "Time of st",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "atm_type",
         "display_column_name": "Atm Type",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "vendor_name",
         "display_column_name": "Vendor Name",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "DENA",
         "table_column": "timestamp_data",
         "display_column_name": "Timestamp Data",
         "table_name": "cash_balance_file_dena"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "TERMID",
         "display_column_name": "TERMID",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "TiaDATETIME",
         "display_column_name": "TiaDATETIME",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "Bill1",
         "display_column_name": "Bill1",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "Bill2",
         "display_column_name": "Bill2",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "Bill3",
         "display_column_name": "Bill3",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "Bill4",
         "display_column_name": "Bill4",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "STARTBALCASS1",
         "display_column_name": "STARTBALCASS1",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "STARTBALCASS2",
         "display_column_name": "STARTBALCASS2",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "STARTBALCASS3",
         "display_column_name": "STARTBALCASS3",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "STARTBALCASS4",
         "display_column_name": "STARTBALCASS4",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHINCCASS1",
         "display_column_name": "CASHINCCASS1",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHINCCASS2",
         "display_column_name": "CASHINCCASS2",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHINCCASS3",
         "display_column_name": "CASHINCCASS3",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHINCCASS4",
         "display_column_name": "CASHINCCASS4",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHOUTCASS1",
         "display_column_name": "CASHOUTCASS1",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHOUTCASS2",
         "display_column_name": "CASHOUTCASS2",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHOUTCASS3",
         "display_column_name": "CASHOUTCASS3",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CASHOUTCASS4",
         "display_column_name": "CASHOUTCASS4",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CURRBALCASS1",
         "display_column_name": "CURRBALCASS1",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CURRBALCASS2",
         "display_column_name": "CURRBALCASS2",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CURRBALCASS3",
         "display_column_name": "CURRBALCASS3",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "CURRBALCASS4",
         "display_column_name": "CURRBALCASS4",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "LASTRESETDATE",
         "display_column_name": "LASTRESETDATE",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "LASTRESETTIME",
         "display_column_name": "LASTRESETTIME",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "LASTTXNDATE",
         "display_column_name": "LASTTXNDATE",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "LASTTXNTIME",
         "display_column_name": "LASTTXNTIME",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "LASTTXNSERIAL",
         "display_column_name": "LASTTXNSERIAL",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IDBI",
         "table_column": "LASTTXNSTATUS",
         "display_column_name": "LASTTXNSTATUS",
         "table_name": "cash_balance_file_idbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "remaining_1",
         "display_column_name": "Remaining 1",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "remaining_2",
         "display_column_name": "Remaining 2",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "remaining_3",
         "display_column_name": "Remaining 3",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "remaining_4",
         "display_column_name": "Remaining 4",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "total_of_remaining",
         "display_column_name": "Total Of Remaining",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "opening_1",
         "display_column_name": "Opening 1",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "opening_2",
         "display_column_name": "Opening 2",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "opening_3",
         "display_column_name": "Opening 3",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "opening_4",
         "display_column_name": "Opening 4",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "total_of_opening",
         "display_column_name": "Total Of Opening",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "dispense_1",
         "display_column_name": "Dispense 1",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "dispense_2",
         "display_column_name": "Dispense 2",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "dispense_3",
         "display_column_name": "Dispense 3",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "dispense_4",
         "display_column_name": "Dispense 4",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "IOB",
         "table_column": "total_of_dispense",
         "display_column_name": "Total Of Dispense",
         "table_name": "cash_balance_file_iob"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "brn",
         "display_column_name": "Brn",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "atm_location",
         "display_column_name": "Atm Location",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "f_tray",
         "display_column_name": "F tray",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "f_count",
         "display_column_name": "F count",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "g_tray",
         "display_column_name": "G tray",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "g_count",
         "display_column_name": "G count",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "h_tray",
         "display_column_name": "H tray",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "h_count",
         "display_column_name": "H count",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "LVB",
         "table_column": "total_amt",
         "display_column_name": "Total Amt",
         "table_name": "cash_balance_file_lvb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "cash_out",
         "display_column_name": "Cash Out",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "endcash",
         "display_column_name": "Endcash",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop1cash",
         "display_column_name": "Hop1cash",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop1bill",
         "display_column_name": "Hop1bill",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop2cash",
         "display_column_name": "Hop2cash",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop2bill",
         "display_column_name": "Hop2bill",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop3cash",
         "display_column_name": "Hop3cash",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop3bill",
         "display_column_name": "Hop3bill",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop4cash",
         "display_column_name": "Hop4cash",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "hop4bill",
         "display_column_name": "Hop4bill",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "ownr",
         "display_column_name": "Ownr",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "state",
         "display_column_name": "State",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "PSB",
         "table_column": "timestamp",
         "display_column_name": "Timestamp",
         "table_name": "cash_balance_file_psb"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "cfb_date_time",
         "display_column_name": "Cfb Date Time",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "i_denom",
         "display_column_name": "I Denom",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "i_begin_cash",
         "display_column_name": "I Begin Cash",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "i_dispense",
         "display_column_name": "I Dispense",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "i_remining",
         "display_column_name": "I Remaining",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "ii_denom",
         "display_column_name": "II Denom",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "ii_begin_cash",
         "display_column_name": "II Begin Cash",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "ii_dispense",
         "display_column_name": "II Dispense",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "ii_remining",
         "display_column_name": "II Remaining",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iii_denom",
         "display_column_name": "III Denom",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iii_begin_cash",
         "display_column_name": "III Begin Cash",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iii_dispense",
         "display_column_name": "III Dispense",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iii_remining",
         "display_column_name": "III Remaining",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iv_denom",
         "display_column_name": "IV Denom",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iv_begin_cash",
         "display_column_name": "IV Begin Cash",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iv_dispense",
         "display_column_name": "IV Dispense",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "RSBL",
         "table_column": "iv_remining",
         "display_column_name": "IV Remaining",
         "table_name": "cash_balance_file_rsbl"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "terminal_location",
         "display_column_name": "Terminal Location",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "city",
         "display_column_name": "City",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_dispensed_hopper_1",
         "display_column_name": "Cash Dispensed Hopper 1",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "bills_hopr1",
         "display_column_name": "Bills Hopr1",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_dispensed_hopper_2",
         "display_column_name": "Cash Dispensed Hopper 2",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "bills_hopr2",
         "display_column_name": "Bills Hopr2",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_dispensed_hopper_3",
         "display_column_name": "Cash Dispensed Hopper 3",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "bills_hopr3",
         "display_column_name": "Bills Hopr3",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_dispensed_hopper_4",
         "display_column_name": "Cash Dispensed Hopper 4",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "bills_hopr4",
         "display_column_name": "Bills Hopr4",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_dispensed_hopper_5",
         "display_column_name": "Cash Dispensed Hopper 5",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "bills_hopr5",
         "display_column_name": "Bills Hopr5",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_dispensed_hopper_6",
         "display_column_name": "Cash Dispensed Hopper 6",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "bills_hopr6",
         "display_column_name": "Bills Hopr6",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "total_remaining_cash_def_curr",
         "display_column_name": "Total Remaining Cash Def Curr",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "remote_address",
         "display_column_name": "Remote Address",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_increment_hopper_1",
         "display_column_name": "Cash Increment Hopper 1",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_increment_hopper_2",
         "display_column_name": "Cash Increment Hopper 2",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_increment_hopper_3",
         "display_column_name": "Cash Increment Hopper 3",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_increment_hopper_4",
         "display_column_name": "Cash Increment Hopper 4",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_increment_hopper_5",
         "display_column_name": "Cash Increment Hopper 5",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "cash_increment_hopper_6",
         "display_column_name": "Cash Increment Hopper 6",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "circle",
         "display_column_name": "Circle",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "sitetype",
         "display_column_name": "Sitetype",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "msvendor",
         "display_column_name": "Msvendor",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "lastwithdrawaltime",
         "display_column_name": "Last withdrawal time",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "switch",
         "display_column_name": "Switch",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "district",
         "display_column_name": "District",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "module",
         "display_column_name": "Module",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "currentstatus",
         "display_column_name": "Current Status",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "branchmanagerphone",
         "display_column_name": "Branch Manager Phone",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "channelmanagercontact",
         "display_column_name": "Channel Manager Contact",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "jointcustodianphone",
         "display_column_name": "Joint Custodian Phone",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "network",
         "display_column_name": "Network",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "populationgroup",
         "display_column_name": "Population Group",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "regionname",
         "display_column_name": "Region Name",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "statename",
         "display_column_name": "State Name",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "jointcustodianname1",
         "display_column_name": "Joint Custodian Name1",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "jointcustodianphone2",
         "display_column_name": "Joint CustodianPhone2",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "SBI",
         "table_column": "last_deposit_txn_time",
         "display_column_name": "Last Deposit Txn Time",
         "table_name": "cash_balance_file_sbi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UBI",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_ubi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UBI",
         "table_column": "type_01",
         "display_column_name": "Type 01",
         "table_name": "cash_balance_file_ubi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UBI",
         "table_column": "type_02",
         "display_column_name": "Type 02",
         "table_name": "cash_balance_file_ubi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UBI",
         "table_column": "type_03",
         "display_column_name": "Type 03",
         "table_name": "cash_balance_file_ubi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UBI",
         "table_column": "type_04",
         "display_column_name": "Type 04",
         "table_name": "cash_balance_file_ubi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UBI",
         "table_column": "file_date_time",
         "display_column_name": "File Date Time",
         "table_name": "cash_balance_file_ubi"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete1_start",
         "display_column_name": "Cassete1 Start",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete1_dispensed",
         "display_column_name": "Cassete1 Dispensed",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete1_remaining",
         "display_column_name": "Cassete1 Remaining",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete2_start",
         "display_column_name": "Cassete2 Start",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete2_dispensed",
         "display_column_name": "Cassete2 Dispensed",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete2_remaining",
         "display_column_name": "Cassete2 Remaining",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete3_start",
         "display_column_name": "Cassete3 Start",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete3_dispensed",
         "display_column_name": "Cassete3 Dispensed",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete3_remaining",
         "display_column_name": "Cassete3 Remaining",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete4_start",
         "display_column_name": "Cassete4 Start",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete4_dispensed",
         "display_column_name": "Cassete4 Dispensed",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "cassete4_remaining",
         "display_column_name": "Cassete4 Remaining",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "total_start",
         "display_column_name": "Total Start",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "toatal_dispensed",
         "display_column_name": "Total Dispensed",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "total_remaining",
         "display_column_name": "Total Remaining",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "vendor_name",
         "display_column_name": "Vendor Name",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "region",
         "display_column_name": "Region",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "mtloc",
         "display_column_name": "Mtloc",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "UCO",
         "table_column": "mtadr",
         "display_column_name": "Mtadr",
         "table_name": "cash_balance_file_uco"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_start1",
         "display_column_name": "Cash Start1",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_start2",
         "display_column_name": "Cash Start2",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_start3",
         "display_column_name": "Cash Start3",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_start4",
         "display_column_name": "Cash Start4",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_inc1",
         "display_column_name": "Cash Inc1",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_inc2",
         "display_column_name": "Cash Inc2",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_inc3",
         "display_column_name": "Cash Inc3",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_inc4",
         "display_column_name": "Cash Inc4",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_dec1",
         "display_column_name": "Cash Dec1",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_dec2",
         "display_column_name": "Cash Dec2",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_dec3",
         "display_column_name": "Cash Dec3",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_dec4",
         "display_column_name": "Cash Dec4",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_out1",
         "display_column_name": "Cash Out1",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_out2",
         "display_column_name": "Cash Out2",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_out3",
         "display_column_name": "Cash Out3",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_out4",
         "display_column_name": "Cash Out4",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_currbal1",
         "display_column_name": "Cash Currbal1",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_currbal2",
         "display_column_name": "Cash Currbal2",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_currbal3",
         "display_column_name": "Cash Currbal3",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "CBR",
         "bankcode": "VJB",
         "table_column": "cash_currbal4",
         "display_column_name": "Cash Currbal4",
         "table_name": "cash_balance_file_vjb"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "fiid",
         "display_column_name": "Fiid",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "term_city",
         "display_column_name": "Term City",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "term_location",
         "display_column_name": "Term Location",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "unapproved_nonfin",
         "display_column_name": "Unapproved Nonfin",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "unapproved_fin",
         "display_column_name": "Unapproved Fin",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "approved_nonfin",
         "display_column_name": "Approved Nonfin",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "approved_fin",
         "display_column_name": "Approved Fin",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "approved_declined_tottran",
         "display_column_name": "Approved Declined Tottran",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "amount_dispensed",
         "display_column_name": "Amount Dispensed",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "CAB",
         "table_column": "file_date",
         "display_column_name": "File Date",
         "table_name": "cash_dispense_file_cab"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "RSBL",
         "table_column": "TRL_DATE_LOCAL",
         "display_column_name": "Trl Date Local",
         "table_name": "cash_dispense_file_rsbl"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "RSBL",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_dispense_file_rsbl"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "RSBL",
         "table_column": "amount_dispensed",
         "display_column_name": "Amount Dispensed",
         "table_name": "cash_dispense_file_rsbl"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "RSBL",
         "table_column": "count_TRL_CARD_ACPT_TERMINAL_IDENT",
         "display_column_name": "Count Trl Card Acpt Terminal Ident",
         "table_name": "cash_dispense_file_rsbl"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "cash_withdrawal",
         "display_column_name": "Cash Withdrawal",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "opening_cash",
         "display_column_name": "Opening Cash",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "total_cash_replenished",
         "display_column_name": "Total Cash Replenished",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "cer",
         "display_column_name": "Cer",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "msvendor",
         "display_column_name": "Msvendor",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "SBI",
         "table_column": "circle_name",
         "display_column_name": "Circle Name",
         "table_name": "cash_dispense_file_sbi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "UBI",
         "table_column": "type_01",
         "display_column_name": "Type 01",
         "table_name": "cash_dispense_file_ubi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "UBI",
         "table_column": "type_02",
         "display_column_name": "Type 02",
         "table_name": "cash_dispense_file_ubi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "UBI",
         "table_column": "type_03",
         "display_column_name": "Type_03",
         "table_name": "cash_dispense_file_ubi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "UBI",
         "table_column": "type_04",
         "display_column_name": "Type 04",
         "table_name": "cash_dispense_file_ubi"
     },
     {
         "datafor": "DISPENSE",
         "bankcode": "UBI",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "cash_dispense_file_ubi"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "bank_name",
         "display_column_name": "Bank",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "atm_id",
         "display_column_name": "Atm Id",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "feeder_branch_name",
         "display_column_name": "Feeder Branch Name",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "cra_name",
         "display_column_name": "Cra Name",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "agent",
         "display_column_name": "Agent",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "vault_balance_100",
         "display_column_name": "Vault Balance 100",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "vault_balance_200",
         "display_column_name": "Vault Balance 200",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "vault_balance_500",
         "display_column_name": "Vault Balance 500",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "vault_balance_2000",
         "display_column_name": "Vault Balance 2000",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "total_vault_balance",
         "display_column_name": "Total Vault Balance",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "dependency",
         "display_column_name": "Dependency",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "remark",
         "display_column_name": "Remark",
         "table_name": "vault_cash_balance"
     },
     {
         "datafor": "VCB",
         "bankcode": "SIS",
         "table_column": "datafor_date_time",
         "display_column_name": "Date",
         "table_name": "vault_cash_balance"
     },





     {
		"table_column": "date",
		"display_column_name": "Date",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "sr_no",
		"display_column_name": "Sr No",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "atm_id",
		"display_column_name": "Atm Id",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "location",
		"display_column_name": "Location",
		"table_name": "Daily_Loading_Report"
	},
	{
        "table_column": "feeder_branch",
		"display_column_name": "Feeder Branch",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "cra",
		"display_column_name": "Cra",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "district",
		"display_column_name": "District",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "state",
		"display_column_name": "State",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "bank_name",
		"display_column_name": "Bank Name",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "planning_100",
		"display_column_name": "Planning 100",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "planning_200",
		"display_column_name": "Planning 200",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "planning_500",
		"display_column_name": "Planning 500",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "planning_2000",
		"display_column_name": "Planning 2000",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "planning_total",
		"display_column_name": "Planning Total",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "revised_planning_100",
		"display_column_name": "Revised Planning 100",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "revised_planning_200",
		"display_column_name": "Revised Planning 200",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "revised_planning_500",
		"display_column_name": "Revised Planning 500",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "revised_planning_2000",
		"display_column_name": "Revised Planning 2000",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "revised_planning_total",
		"display_column_name": "Revised Planning Total",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "actual_loading_100",
		"display_column_name": "Actual Loading 100",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "actual_loading_200",
		"display_column_name": "Actual Loading 200",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "actual_loading_500",
		"display_column_name": "Actual Loading 500",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "actual_loading_2000",
		"display_column_name": "Actual Loading 2000",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "actual_loading_total",
		"display_column_name": "Actual Loading Total",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "remarks",
		"display_column_name": "Remarks",
		"table_name": "Daily_Loading_Report"
	},
	{
		"table_column": "diverted_atm_id",
		"display_column_name": "Diverted Atm Id",
		"table_name": "Daily_Loading_Report"
	},
 ];
 }
