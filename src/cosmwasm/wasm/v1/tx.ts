// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: cosmwasm/wasm/v1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { AccessConfig } from "./types";
import { cosmos } from "../../../cosmos";

export class MsgStoreCode {
  static encode(message: MsgStoreCode, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(18);
    writer.bytes(message.wasm_byte_code);

    const instantiate_permission_ = message.instantiate_permission;
    if (instantiate_permission_ !== null) {
      writer.uint32(42);
      writer.fork();
      AccessConfig.encode(instantiate_permission_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgStoreCode {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgStoreCode();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.wasm_byte_code = reader.bytes();
          break;

        case 5:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission: AccessConfig | null;

  constructor(
    sender: string = "",
    wasm_byte_code: Uint8Array = new Uint8Array(0),
    instantiate_permission: AccessConfig | null = null
  ) {
    this.sender = sender;
    this.wasm_byte_code = wasm_byte_code;
    this.instantiate_permission = instantiate_permission;
  }
}

export function decodeMsgStoreCode(a: Uint8Array): MsgStoreCode {
  return Protobuf.decode<MsgStoreCode>(a, MsgStoreCode.decode);
}

@unmanaged
export class MsgStoreCodeResponse {
  static encode(message: MsgStoreCodeResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.code_id);
  }

  static decode(reader: Reader, length: i32): MsgStoreCodeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgStoreCodeResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_id: u64;

  constructor(code_id: u64 = 0) {
    this.code_id = code_id;
  }
}

export function decodeMsgStoreCodeResponse(a: Uint8Array): MsgStoreCodeResponse {
  return Protobuf.decode<MsgStoreCodeResponse>(a, MsgStoreCodeResponse.decode);
}

export class MsgInstantiateContract {
  static encode(message: MsgInstantiateContract, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(18);
    writer.string(message.admin);

    writer.uint32(24);
    writer.uint64(message.code_id);

    writer.uint32(34);
    writer.string(message.label);

    writer.uint32(42);
    writer.bytes(message.msg);

    const funds_ = message.funds;
    for (let i = 0; i < funds_.length; ++i) {
      writer.uint32(50);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(funds_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgInstantiateContract {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgInstantiateContract();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.code_id = reader.uint64();
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  admin: string;
  code_id: u64;
  label: string;
  msg: Uint8Array;
  funds: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    sender: string = "",
    admin: string = "",
    code_id: u64 = 0,
    label: string = "",
    msg: Uint8Array = new Uint8Array(0),
    funds: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.sender = sender;
    this.admin = admin;
    this.code_id = code_id;
    this.label = label;
    this.msg = msg;
    this.funds = funds;
  }
}

export function decodeMsgInstantiateContract(a: Uint8Array): MsgInstantiateContract {
  return Protobuf.decode<MsgInstantiateContract>(a, MsgInstantiateContract.decode);
}

export class MsgInstantiateContractResponse {
  static encode(message: MsgInstantiateContractResponse, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    writer.uint32(18);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): MsgInstantiateContractResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgInstantiateContractResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  data: Uint8Array;

  constructor(address: string = "", data: Uint8Array = new Uint8Array(0)) {
    this.address = address;
    this.data = data;
  }
}

export function decodeMsgInstantiateContractResponse(a: Uint8Array): MsgInstantiateContractResponse {
  return Protobuf.decode<MsgInstantiateContractResponse>(a, MsgInstantiateContractResponse.decode);
}

export class MsgExecuteContract {
  static encode(message: MsgExecuteContract, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(18);
    writer.string(message.contract);

    writer.uint32(26);
    writer.bytes(message.msg);

    const funds_ = message.funds;
    for (let i = 0; i < funds_.length; ++i) {
      writer.uint32(42);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(funds_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgExecuteContract {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExecuteContract();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 5:
          message.funds.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  contract: string;
  msg: Uint8Array;
  funds: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    sender: string = "",
    contract: string = "",
    msg: Uint8Array = new Uint8Array(0),
    funds: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.sender = sender;
    this.contract = contract;
    this.msg = msg;
    this.funds = funds;
  }
}

export function decodeMsgExecuteContract(a: Uint8Array): MsgExecuteContract {
  return Protobuf.decode<MsgExecuteContract>(a, MsgExecuteContract.decode);
}

export class MsgExecuteContractResponse {
  static encode(message: MsgExecuteContractResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): MsgExecuteContractResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExecuteContractResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function decodeMsgExecuteContractResponse(a: Uint8Array): MsgExecuteContractResponse {
  return Protobuf.decode<MsgExecuteContractResponse>(a, MsgExecuteContractResponse.decode);
}

export class MsgMigrateContract {
  static encode(message: MsgMigrateContract, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(18);
    writer.string(message.contract);

    writer.uint32(24);
    writer.uint64(message.code_id);

    writer.uint32(34);
    writer.bytes(message.msg);
  }

  static decode(reader: Reader, length: i32): MsgMigrateContract {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgMigrateContract();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.code_id = reader.uint64();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  contract: string;
  code_id: u64;
  msg: Uint8Array;

  constructor(sender: string = "", contract: string = "", code_id: u64 = 0, msg: Uint8Array = new Uint8Array(0)) {
    this.sender = sender;
    this.contract = contract;
    this.code_id = code_id;
    this.msg = msg;
  }
}

export function decodeMsgMigrateContract(a: Uint8Array): MsgMigrateContract {
  return Protobuf.decode<MsgMigrateContract>(a, MsgMigrateContract.decode);
}

export class MsgMigrateContractResponse {
  static encode(message: MsgMigrateContractResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): MsgMigrateContractResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgMigrateContractResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function decodeMsgMigrateContractResponse(a: Uint8Array): MsgMigrateContractResponse {
  return Protobuf.decode<MsgMigrateContractResponse>(a, MsgMigrateContractResponse.decode);
}

export class MsgUpdateAdmin {
  static encode(message: MsgUpdateAdmin, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(18);
    writer.string(message.new_admin);

    writer.uint32(26);
    writer.string(message.contract);
  }

  static decode(reader: Reader, length: i32): MsgUpdateAdmin {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpdateAdmin();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.new_admin = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  new_admin: string;
  contract: string;

  constructor(sender: string = "", new_admin: string = "", contract: string = "") {
    this.sender = sender;
    this.new_admin = new_admin;
    this.contract = contract;
  }
}

export function decodeMsgUpdateAdmin(a: Uint8Array): MsgUpdateAdmin {
  return Protobuf.decode<MsgUpdateAdmin>(a, MsgUpdateAdmin.decode);
}

@unmanaged
export class MsgUpdateAdminResponse {
  static encode(message: MsgUpdateAdminResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUpdateAdminResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpdateAdminResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgUpdateAdminResponse(a: Uint8Array): MsgUpdateAdminResponse {
  return Protobuf.decode<MsgUpdateAdminResponse>(a, MsgUpdateAdminResponse.decode);
}

export class MsgClearAdmin {
  static encode(message: MsgClearAdmin, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(26);
    writer.string(message.contract);
  }

  static decode(reader: Reader, length: i32): MsgClearAdmin {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgClearAdmin();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  contract: string;

  constructor(sender: string = "", contract: string = "") {
    this.sender = sender;
    this.contract = contract;
  }
}

export function decodeMsgClearAdmin(a: Uint8Array): MsgClearAdmin {
  return Protobuf.decode<MsgClearAdmin>(a, MsgClearAdmin.decode);
}

@unmanaged
export class MsgClearAdminResponse {
  static encode(message: MsgClearAdminResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgClearAdminResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgClearAdminResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgClearAdminResponse(a: Uint8Array): MsgClearAdminResponse {
  return Protobuf.decode<MsgClearAdminResponse>(a, MsgClearAdminResponse.decode);
}