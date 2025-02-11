import { Document, Schema, model, models } from "mongoose";

// Define the ITransaction interface
export interface ITransaction extends Document {
  createdAt: Date;
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer: {
    _id: string; 
  };
}

// Define the Transaction schema
const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Create the Mongoose model for Transaction
const Transaction = models?.Transaction || model<ITransaction>("Transaction", TransactionSchema);

export default Transaction;