import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';
import Product from "@models/Product";

// Get a single product by ID
export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    const { id } = await params;
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}