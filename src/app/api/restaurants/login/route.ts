import { mongoDB } from '@/app/lib/db';
import { restaurantSchema } from '@/app/models/Restaurant';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    await mongoDB();

    const body = await request.json();

    const { email, password } = body;

    const restaurant = await restaurantSchema.findOne({ email: email });

    if (!restaurant) {
        return NextResponse.json({ errMsg: 'Restaurant does not exist', success: false }, { status: 422 });
    }

    const bcrypt = require('bcryptjs');
    const match = await bcrypt.compare(password, restaurant.password);

    if (!match) {
        return NextResponse.json({ errMsg: 'Incorrect password', success: false }, { status: 422 });
    }

    const data = {
        _id: restaurant._id,
        name: restaurant.name,
        email: restaurant.email,
    };

    const jwt = require('jsonwebtoken');
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return NextResponse.json({ token, success: true });
}
