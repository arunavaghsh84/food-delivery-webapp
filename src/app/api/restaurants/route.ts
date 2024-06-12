import { mongoDB } from '@/app/lib/db';
import { restaurantSchema } from '@/app/models/Restaurant';

export async function GET() {
    await mongoDB();

    const restaurants = await restaurantSchema.find({});

    return new Response(JSON.stringify(restaurants), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
