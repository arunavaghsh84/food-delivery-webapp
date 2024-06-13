import { mongoDB } from '@/app/lib/db';
import { restaurantSchema } from '@/app/models/Restaurant';
import { NextResponse } from 'next/server';

export async function GET() {
    await mongoDB();

    const restaurants = await restaurantSchema.find({});

    return NextResponse.json(restaurants, { status: 200 });
}

export async function POST(request: Request) {
    await mongoDB();

    const body = await request.json();

    const { name, address, email, password } = body;

    const restaurant = await restaurantSchema.findOne({ email: email });

    if (restaurant) {
        return NextResponse.json({ errMsg: 'Restaurant already exists', success: false }, { status: 422 });
    }

    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10);

    const newRestaurant = new restaurantSchema({
        name,
        address,
        email,
        password: await bcrypt.hash(password, salt),
    });

    await newRestaurant.save();

    return NextResponse.json({ newRestaurant, success: true });
}
