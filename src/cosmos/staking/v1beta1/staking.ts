// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: cosmos/staking/v1beta1/staking.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { tendermint } from "../../../tendermint";
import { google } from "../../../google";
import { base } from "../../base";

export class HistoricalInfo {
  static encode(message: HistoricalInfo, writer: Writer): void {
    const header_ = message.header;
    if (header_ !== null) {
      writer.uint32(10);
      writer.fork();
      tendermint.types.Header.encode(header_, writer);
      writer.ldelim();
    }

    const valset_ = message.valset;
    for (let i = 0; i < valset_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Validator.encode(valset_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): HistoricalInfo {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HistoricalInfo();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = tendermint.types.Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  header: tendermint.types.Header | null;
  valset: Array<Validator>;

  constructor(header: tendermint.types.Header | null = null, valset: Array<Validator> = []) {
    this.header = header;
    this.valset = valset;
  }
}

export function decodeHistoricalInfo(a: Uint8Array): HistoricalInfo {
  return Protobuf.decode<HistoricalInfo>(a, HistoricalInfo.decode);
}

export class CommissionRates {
  static encode(message: CommissionRates, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.rate);

    writer.uint32(18);
    writer.string(message.max_rate);

    writer.uint32(26);
    writer.string(message.max_change_rate);
  }

  static decode(reader: Reader, length: i32): CommissionRates {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CommissionRates();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;

        case 2:
          message.max_rate = reader.string();
          break;

        case 3:
          message.max_change_rate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  rate: string;
  max_rate: string;
  max_change_rate: string;

  constructor(rate: string = "", max_rate: string = "", max_change_rate: string = "") {
    this.rate = rate;
    this.max_rate = max_rate;
    this.max_change_rate = max_change_rate;
  }
}

export function decodeCommissionRates(a: Uint8Array): CommissionRates {
  return Protobuf.decode<CommissionRates>(a, CommissionRates.decode);
}

export class Commission {
  static encode(message: Commission, writer: Writer): void {
    const commission_rates_ = message.commission_rates;
    if (commission_rates_ !== null) {
      writer.uint32(10);
      writer.fork();
      CommissionRates.encode(commission_rates_, writer);
      writer.ldelim();
    }

    const update_time_ = message.update_time;
    if (update_time_ !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Timestamp.encode(update_time_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Commission {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Commission();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission_rates = CommissionRates.decode(reader, reader.uint32());
          break;

        case 2:
          message.update_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  commission_rates: CommissionRates | null;
  update_time: google.protobuf.Timestamp | null;

  constructor(commission_rates: CommissionRates | null = null, update_time: google.protobuf.Timestamp | null = null) {
    this.commission_rates = commission_rates;
    this.update_time = update_time;
  }
}

export function decodeCommission(a: Uint8Array): Commission {
  return Protobuf.decode<Commission>(a, Commission.decode);
}

export class Description {
  static encode(message: Description, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.moniker);

    writer.uint32(18);
    writer.string(message.identity);

    writer.uint32(26);
    writer.string(message.website);

    writer.uint32(34);
    writer.string(message.security_contact);

    writer.uint32(42);
    writer.string(message.details);
  }

  static decode(reader: Reader, length: i32): Description {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Description();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;

        case 2:
          message.identity = reader.string();
          break;

        case 3:
          message.website = reader.string();
          break;

        case 4:
          message.security_contact = reader.string();
          break;

        case 5:
          message.details = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;

  constructor(
    moniker: string = "",
    identity: string = "",
    website: string = "",
    security_contact: string = "",
    details: string = ""
  ) {
    this.moniker = moniker;
    this.identity = identity;
    this.website = website;
    this.security_contact = security_contact;
    this.details = details;
  }
}

export function decodeDescription(a: Uint8Array): Description {
  return Protobuf.decode<Description>(a, Description.decode);
}

export class Validator {
  static encode(message: Validator, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.operator_address);

    const consensus_pubkey_ = message.consensus_pubkey;
    if (consensus_pubkey_ !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(consensus_pubkey_, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.bool(message.jailed);

    writer.uint32(32);
    writer.int32(message.status);

    writer.uint32(42);
    writer.string(message.tokens);

    writer.uint32(50);
    writer.string(message.delegator_shares);

    const description_ = message.description;
    if (description_ !== null) {
      writer.uint32(58);
      writer.fork();
      Description.encode(description_, writer);
      writer.ldelim();
    }

    writer.uint32(64);
    writer.int64(message.unbonding_height);

    const unbonding_time_ = message.unbonding_time;
    if (unbonding_time_ !== null) {
      writer.uint32(74);
      writer.fork();
      google.protobuf.Timestamp.encode(unbonding_time_, writer);
      writer.ldelim();
    }

    const commission_ = message.commission;
    if (commission_ !== null) {
      writer.uint32(82);
      writer.fork();
      Commission.encode(commission_, writer);
      writer.ldelim();
    }

    writer.uint32(90);
    writer.string(message.min_self_delegation);
  }

  static decode(reader: Reader, length: i32): Validator {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Validator();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator_address = reader.string();
          break;

        case 2:
          message.consensus_pubkey = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.jailed = reader.bool();
          break;

        case 4:
          message.status = reader.int32();
          break;

        case 5:
          message.tokens = reader.string();
          break;

        case 6:
          message.delegator_shares = reader.string();
          break;

        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 8:
          message.unbonding_height = reader.int64();
          break;

        case 9:
          message.unbonding_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;

        case 11:
          message.min_self_delegation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  operator_address: string;
  consensus_pubkey: google.protobuf.Any | null;
  jailed: bool;
  status: BondStatus;
  tokens: string;
  delegator_shares: string;
  description: Description | null;
  unbonding_height: i64;
  unbonding_time: google.protobuf.Timestamp | null;
  commission: Commission | null;
  min_self_delegation: string;

  constructor(
    operator_address: string = "",
    consensus_pubkey: google.protobuf.Any | null = null,
    jailed: bool = false,
    status: BondStatus = 0,
    tokens: string = "",
    delegator_shares: string = "",
    description: Description | null = null,
    unbonding_height: i64 = 0,
    unbonding_time: google.protobuf.Timestamp | null = null,
    commission: Commission | null = null,
    min_self_delegation: string = ""
  ) {
    this.operator_address = operator_address;
    this.consensus_pubkey = consensus_pubkey;
    this.jailed = jailed;
    this.status = status;
    this.tokens = tokens;
    this.delegator_shares = delegator_shares;
    this.description = description;
    this.unbonding_height = unbonding_height;
    this.unbonding_time = unbonding_time;
    this.commission = commission;
    this.min_self_delegation = min_self_delegation;
  }
}

export function decodeValidator(a: Uint8Array): Validator {
  return Protobuf.decode<Validator>(a, Validator.decode);
}

export class ValAddresses {
  static encode(message: ValAddresses, writer: Writer): void {
    const addresses_ = message.addresses;
    if (addresses_.length !== 0) {
      for (let i = 0; i < addresses_.length; ++i) {
        writer.uint32(10);
        writer.string(addresses_[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ValAddresses {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ValAddresses();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  addresses: Array<string>;

  constructor(addresses: Array<string> = []) {
    this.addresses = addresses;
  }
}

export function decodeValAddresses(a: Uint8Array): ValAddresses {
  return Protobuf.decode<ValAddresses>(a, ValAddresses.decode);
}

export class DVPair {
  static encode(message: DVPair, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.validator_address);
  }

  static decode(reader: Reader, length: i32): DVPair {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DVPair();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  validator_address: string;

  constructor(delegator_address: string = "", validator_address: string = "") {
    this.delegator_address = delegator_address;
    this.validator_address = validator_address;
  }
}

export function decodeDVPair(a: Uint8Array): DVPair {
  return Protobuf.decode<DVPair>(a, DVPair.decode);
}

export class DVPairs {
  static encode(message: DVPairs, writer: Writer): void {
    const pairs_ = message.pairs;
    for (let i = 0; i < pairs_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      DVPair.encode(pairs_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DVPairs {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DVPairs();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pairs: Array<DVPair>;

  constructor(pairs: Array<DVPair> = []) {
    this.pairs = pairs;
  }
}

export function decodeDVPairs(a: Uint8Array): DVPairs {
  return Protobuf.decode<DVPairs>(a, DVPairs.decode);
}

export class DVVTriplet {
  static encode(message: DVVTriplet, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.validator_src_address);

    writer.uint32(26);
    writer.string(message.validator_dst_address);
  }

  static decode(reader: Reader, length: i32): DVVTriplet {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DVVTriplet();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_src_address = reader.string();
          break;

        case 3:
          message.validator_dst_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;

  constructor(delegator_address: string = "", validator_src_address: string = "", validator_dst_address: string = "") {
    this.delegator_address = delegator_address;
    this.validator_src_address = validator_src_address;
    this.validator_dst_address = validator_dst_address;
  }
}

export function decodeDVVTriplet(a: Uint8Array): DVVTriplet {
  return Protobuf.decode<DVVTriplet>(a, DVVTriplet.decode);
}

export class DVVTriplets {
  static encode(message: DVVTriplets, writer: Writer): void {
    const triplets_ = message.triplets;
    for (let i = 0; i < triplets_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      DVVTriplet.encode(triplets_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DVVTriplets {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DVVTriplets();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  triplets: Array<DVVTriplet>;

  constructor(triplets: Array<DVVTriplet> = []) {
    this.triplets = triplets;
  }
}

export function decodeDVVTriplets(a: Uint8Array): DVVTriplets {
  return Protobuf.decode<DVVTriplets>(a, DVVTriplets.decode);
}

export class Delegation {
  static encode(message: Delegation, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.validator_address);

    writer.uint32(26);
    writer.string(message.shares);
  }

  static decode(reader: Reader, length: i32): Delegation {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Delegation();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        case 3:
          message.shares = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  validator_address: string;
  shares: string;

  constructor(delegator_address: string = "", validator_address: string = "", shares: string = "") {
    this.delegator_address = delegator_address;
    this.validator_address = validator_address;
    this.shares = shares;
  }
}

export function decodeDelegation(a: Uint8Array): Delegation {
  return Protobuf.decode<Delegation>(a, Delegation.decode);
}

export class UnbondingDelegation {
  static encode(message: UnbondingDelegation, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.validator_address);

    const entries_ = message.entries;
    for (let i = 0; i < entries_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      UnbondingDelegationEntry.encode(entries_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): UnbondingDelegation {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UnbondingDelegation();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  validator_address: string;
  entries: Array<UnbondingDelegationEntry>;

  constructor(delegator_address: string = "", validator_address: string = "", entries: Array<UnbondingDelegationEntry> = []) {
    this.delegator_address = delegator_address;
    this.validator_address = validator_address;
    this.entries = entries;
  }
}

export function decodeUnbondingDelegation(a: Uint8Array): UnbondingDelegation {
  return Protobuf.decode<UnbondingDelegation>(a, UnbondingDelegation.decode);
}

export class UnbondingDelegationEntry {
  static encode(message: UnbondingDelegationEntry, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.creation_height);

    const completion_time_ = message.completion_time;
    if (completion_time_ !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Timestamp.encode(completion_time_, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.initial_balance);

    writer.uint32(34);
    writer.string(message.balance);
  }

  static decode(reader: Reader, length: i32): UnbondingDelegationEntry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UnbondingDelegationEntry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;

        case 2:
          message.completion_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.initial_balance = reader.string();
          break;

        case 4:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  creation_height: i64;
  completion_time: google.protobuf.Timestamp | null;
  initial_balance: string;
  balance: string;

  constructor(
    creation_height: i64 = 0,
    completion_time: google.protobuf.Timestamp | null = null,
    initial_balance: string = "",
    balance: string = ""
  ) {
    this.creation_height = creation_height;
    this.completion_time = completion_time;
    this.initial_balance = initial_balance;
    this.balance = balance;
  }
}

export function decodeUnbondingDelegationEntry(a: Uint8Array): UnbondingDelegationEntry {
  return Protobuf.decode<UnbondingDelegationEntry>(a, UnbondingDelegationEntry.decode);
}

export class RedelegationEntry {
  static encode(message: RedelegationEntry, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.creation_height);

    const completion_time_ = message.completion_time;
    if (completion_time_ !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Timestamp.encode(completion_time_, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.initial_balance);

    writer.uint32(34);
    writer.string(message.shares_dst);
  }

  static decode(reader: Reader, length: i32): RedelegationEntry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RedelegationEntry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creation_height = reader.int64();
          break;

        case 2:
          message.completion_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.initial_balance = reader.string();
          break;

        case 4:
          message.shares_dst = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  creation_height: i64;
  completion_time: google.protobuf.Timestamp | null;
  initial_balance: string;
  shares_dst: string;

  constructor(
    creation_height: i64 = 0,
    completion_time: google.protobuf.Timestamp | null = null,
    initial_balance: string = "",
    shares_dst: string = ""
  ) {
    this.creation_height = creation_height;
    this.completion_time = completion_time;
    this.initial_balance = initial_balance;
    this.shares_dst = shares_dst;
  }
}

export function decodeRedelegationEntry(a: Uint8Array): RedelegationEntry {
  return Protobuf.decode<RedelegationEntry>(a, RedelegationEntry.decode);
}

export class Redelegation {
  static encode(message: Redelegation, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.validator_src_address);

    writer.uint32(26);
    writer.string(message.validator_dst_address);

    const entries_ = message.entries;
    for (let i = 0; i < entries_.length; ++i) {
      writer.uint32(34);
      writer.fork();
      RedelegationEntry.encode(entries_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Redelegation {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Redelegation();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_src_address = reader.string();
          break;

        case 3:
          message.validator_dst_address = reader.string();
          break;

        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  entries: Array<RedelegationEntry>;

  constructor(
    delegator_address: string = "",
    validator_src_address: string = "",
    validator_dst_address: string = "",
    entries: Array<RedelegationEntry> = []
  ) {
    this.delegator_address = delegator_address;
    this.validator_src_address = validator_src_address;
    this.validator_dst_address = validator_dst_address;
    this.entries = entries;
  }
}

export function decodeRedelegation(a: Uint8Array): Redelegation {
  return Protobuf.decode<Redelegation>(a, Redelegation.decode);
}

export class Params {
  static encode(message: Params, writer: Writer): void {
    const unbonding_time_ = message.unbonding_time;
    if (unbonding_time_ !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Duration.encode(unbonding_time_, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.uint32(message.max_validators);

    writer.uint32(24);
    writer.uint32(message.max_entries);

    writer.uint32(32);
    writer.uint32(message.historical_entries);

    writer.uint32(42);
    writer.string(message.bond_denom);
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding_time = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.max_validators = reader.uint32();
          break;

        case 3:
          message.max_entries = reader.uint32();
          break;

        case 4:
          message.historical_entries = reader.uint32();
          break;

        case 5:
          message.bond_denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  unbonding_time: google.protobuf.Duration | null;
  max_validators: u32;
  max_entries: u32;
  historical_entries: u32;
  bond_denom: string;

  constructor(
    unbonding_time: google.protobuf.Duration | null = null,
    max_validators: u32 = 0,
    max_entries: u32 = 0,
    historical_entries: u32 = 0,
    bond_denom: string = ""
  ) {
    this.unbonding_time = unbonding_time;
    this.max_validators = max_validators;
    this.max_entries = max_entries;
    this.historical_entries = historical_entries;
    this.bond_denom = bond_denom;
  }
}

export function decodeParams(a: Uint8Array): Params {
  return Protobuf.decode<Params>(a, Params.decode);
}

export class DelegationResponse {
  static encode(message: DelegationResponse, writer: Writer): void {
    const delegation_ = message.delegation;
    if (delegation_ !== null) {
      writer.uint32(10);
      writer.fork();
      Delegation.encode(delegation_, writer);
      writer.ldelim();
    }

    const balance_ = message.balance;
    if (balance_ !== null) {
      writer.uint32(18);
      writer.fork();
      base.v1beta1.Coin.encode(balance_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DelegationResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DelegationResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;

        case 2:
          message.balance = base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegation: Delegation | null;
  balance: base.v1beta1.Coin | null;

  constructor(delegation: Delegation | null = null, balance: base.v1beta1.Coin | null = null) {
    this.delegation = delegation;
    this.balance = balance;
  }
}

export function decodeDelegationResponse(a: Uint8Array): DelegationResponse {
  return Protobuf.decode<DelegationResponse>(a, DelegationResponse.decode);
}

export class RedelegationEntryResponse {
  static encode(message: RedelegationEntryResponse, writer: Writer): void {
    const redelegation_entry_ = message.redelegation_entry;
    if (redelegation_entry_ !== null) {
      writer.uint32(10);
      writer.fork();
      RedelegationEntry.encode(redelegation_entry_, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.balance);
  }

  static decode(reader: Reader, length: i32): RedelegationEntryResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RedelegationEntryResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
          break;

        case 4:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  redelegation_entry: RedelegationEntry | null;
  balance: string;

  constructor(redelegation_entry: RedelegationEntry | null = null, balance: string = "") {
    this.redelegation_entry = redelegation_entry;
    this.balance = balance;
  }
}

export function decodeRedelegationEntryResponse(a: Uint8Array): RedelegationEntryResponse {
  return Protobuf.decode<RedelegationEntryResponse>(a, RedelegationEntryResponse.decode);
}

export class RedelegationResponse {
  static encode(message: RedelegationResponse, writer: Writer): void {
    const redelegation_ = message.redelegation;
    if (redelegation_ !== null) {
      writer.uint32(10);
      writer.fork();
      Redelegation.encode(redelegation_, writer);
      writer.ldelim();
    }

    const entries_ = message.entries;
    for (let i = 0; i < entries_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      RedelegationEntryResponse.encode(entries_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): RedelegationResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RedelegationResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;

        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  redelegation: Redelegation | null;
  entries: Array<RedelegationEntryResponse>;

  constructor(redelegation: Redelegation | null = null, entries: Array<RedelegationEntryResponse> = []) {
    this.redelegation = redelegation;
    this.entries = entries;
  }
}

export function decodeRedelegationResponse(a: Uint8Array): RedelegationResponse {
  return Protobuf.decode<RedelegationResponse>(a, RedelegationResponse.decode);
}

export class Pool {
  static encode(message: Pool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.not_bonded_tokens);

    writer.uint32(18);
    writer.string(message.bonded_tokens);
  }

  static decode(reader: Reader, length: i32): Pool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Pool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.not_bonded_tokens = reader.string();
          break;

        case 2:
          message.bonded_tokens = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  not_bonded_tokens: string;
  bonded_tokens: string;

  constructor(not_bonded_tokens: string = "", bonded_tokens: string = "") {
    this.not_bonded_tokens = not_bonded_tokens;
    this.bonded_tokens = bonded_tokens;
  }
}

export function decodePool(a: Uint8Array): Pool {
  return Protobuf.decode<Pool>(a, Pool.decode);
}

export enum BondStatus {
  BOND_STATUS_UNSPECIFIED = 0,
  BOND_STATUS_UNBONDED = 1,
  BOND_STATUS_UNBONDING = 2,
  BOND_STATUS_BONDED = 3,
}