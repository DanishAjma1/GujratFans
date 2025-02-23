import { connectMongoDB } from "../../lib/mongoDB";
import Account from "../../models/account";

export async function POST(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const { name, description, amount } = data;
    await Account.create({
      name,
      description,
      amount,
    });
    return new Response(
      JSON.stringify({ message: "Account inserted successfully.." }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response({ message: "Account not inserted" }, { status: 500 });
  }
}
export async function GET() {
  try {
    await connectMongoDB();
    const Accounts = await Account.find();
    return new Response(JSON.stringify(Accounts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response({ message: "Account not found" }, { status: 500 });
  }
}
export async function PUT(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const { _id, name, description, amount } = data;
    await Account.findByIdAndUpdate(_id, {
      name,
      description,
      amount,
    });
    return new Response(
      JSON.stringify({ message: "Account updated successfully.." }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Account not updated" }), {
      status: 500,
    });
  }
}
export async function DELETE(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const { _id } = data;
    await Account.findByIdAndDelete(_id);
    return new Response(
      JSON.stringify({ message: "Account deleted successfully.." }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Account not deleted" }), {
      status: 500,
    });
  }
}
