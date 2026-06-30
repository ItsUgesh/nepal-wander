import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      console.error('Mailchimp API key or Audience ID is missing in environment variables.');
      return NextResponse.json(
        { error: 'Newsletter service is currently misconfigured.' },
        { status: 500 }
      );
    }

    // Mailchimp data center is the suffix of the API key (e.g. us17 in abcdefg-us17)
    const DATACENTER = API_KEY.split('-')[1];
    if (!DATACENTER) {
      return NextResponse.json(
        { error: 'Invalid Mailchimp API key format. Ensure it includes the data center suffix (e.g., -us17).' },
        { status: 400 }
      );
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: 'pending',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.status >= 400) {
      // If the user is already subscribed, Mailchimp returns a specific title
      if (responseData.title === 'Member Exists') {
        return NextResponse.json(
          { message: "You're already subscribed to our newsletter!" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: responseData.detail || 'Could not subscribe to newsletter.' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Thank you for subscribing!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Mailchimp API subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
