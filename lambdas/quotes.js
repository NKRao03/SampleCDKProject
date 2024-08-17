"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quotesHandler = async (event, context) => {
    const quotes = [
        {
            text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
            author: 'Thomas Edison, type.fit',
        },
        {
            text: 'You can observe a lot just by watching.',
            author: 'Yogi Berra, type.fit',
        },
        {
            text: 'A house divided against itself cannot stand.',
            author: 'Abraham Lincoln, type.fit',
        },
        {
            text: 'Difficulties increase the nearer we get to the goal.',
            author: 'Johann Wolfgang von Goethe, type.fit',
        },
        {
            text: 'Fate is in your hands and no one elses',
            author: 'Byron Pulsifer, type.fit',
        },
        {
            text: 'Be the chief but never the lord.',
            author: 'Lao Tzu, type.fit',
        },
        {
            text: 'Nothing happens unless first we dream.',
            author: 'Carl Sandburg, type.fit',
        },
        {
            text: 'Well begun is half done.',
            author: 'Aristotle, type.fit',
        },
        {
            text: 'Life is a learning experience, only if you learn.',
            author: 'Yogi Berra',
        },
        {
            text: 'Self-complacency is fatal to progress.',
            author: 'Margaret Sangster, type.fit',
        },
        {
            text: 'Peace comes from within. Do not seek it without.',
            author: 'Buddha, type.fit',
        },
        {
            text: 'What you give is what you get.',
            author: 'Byron Pulsifer, type.fit',
        },
        {
            text: 'We can only learn to love by loving.',
            author: 'Iris Murdoch, type.fit',
        },
        {
            text: 'Life is change. Growth is optional. Choose wisely.',
            author: 'Karen Clark, type.fit',
        },
        {
            text: "You'll see it when you believe it.",
            author: 'Wayne Dyer, type.fit',
        },
        {
            text: 'Today is the tomorrow we worried about yesterday.',
            author: 'type.fit',
        },
    ];
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    };
};
exports.default = quotesHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xhbWJkYXMvcXVvdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxhQUFhLEdBQTJCLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDckUsTUFBTSxNQUFNLEdBQUc7UUFDYjtZQUNFLElBQUksRUFBRSx5RUFBeUU7WUFDL0UsTUFBTSxFQUFFLHlCQUF5QjtTQUNsQztRQUNEO1lBQ0UsSUFBSSxFQUFFLHlDQUF5QztZQUMvQyxNQUFNLEVBQUUsc0JBQXNCO1NBQy9CO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsOENBQThDO1lBQ3BELE1BQU0sRUFBRSwyQkFBMkI7U0FDcEM7UUFDRDtZQUNFLElBQUksRUFBRSxzREFBc0Q7WUFDNUQsTUFBTSxFQUFFLHNDQUFzQztTQUMvQztRQUNEO1lBQ0UsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxNQUFNLEVBQUUsMEJBQTBCO1NBQ25DO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsa0NBQWtDO1lBQ3hDLE1BQU0sRUFBRSxtQkFBbUI7U0FDNUI7UUFDRDtZQUNFLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsTUFBTSxFQUFFLHlCQUF5QjtTQUNsQztRQUNEO1lBQ0UsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQyxNQUFNLEVBQUUscUJBQXFCO1NBQzlCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsbURBQW1EO1lBQ3pELE1BQU0sRUFBRSxZQUFZO1NBQ3JCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsd0NBQXdDO1lBQzlDLE1BQU0sRUFBRSw2QkFBNkI7U0FDdEM7UUFDRDtZQUNFLElBQUksRUFBRSxrREFBa0Q7WUFDeEQsTUFBTSxFQUFFLGtCQUFrQjtTQUMzQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGdDQUFnQztZQUN0QyxNQUFNLEVBQUUsMEJBQTBCO1NBQ25DO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsc0NBQXNDO1lBQzVDLE1BQU0sRUFBRSx3QkFBd0I7U0FDakM7UUFDRDtZQUNFLElBQUksRUFBRSxvREFBb0Q7WUFDMUQsTUFBTSxFQUFFLHVCQUF1QjtTQUNoQztRQUNEO1lBQ0UsSUFBSSxFQUFFLG9DQUFvQztZQUMxQyxNQUFNLEVBQUUsc0JBQXNCO1NBQy9CO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsbURBQW1EO1lBQ3pELE1BQU0sRUFBRSxVQUFVO1NBQ25CO0tBQ0YsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEdBQUc7UUFDZixPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7UUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQzNCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmNvbnN0IHF1b3Rlc0hhbmRsZXI6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgcXVvdGVzID0gW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHZW5pdXMgaXMgb25lIHBlcmNlbnQgaW5zcGlyYXRpb24gYW5kIG5pbmV0eS1uaW5lIHBlcmNlbnQgcGVyc3BpcmF0aW9uLicsXG4gICAgICBhdXRob3I6ICdUaG9tYXMgRWRpc29uLCB0eXBlLmZpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnWW91IGNhbiBvYnNlcnZlIGEgbG90IGp1c3QgYnkgd2F0Y2hpbmcuJyxcbiAgICAgIGF1dGhvcjogJ1lvZ2kgQmVycmEsIHR5cGUuZml0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBIGhvdXNlIGRpdmlkZWQgYWdhaW5zdCBpdHNlbGYgY2Fubm90IHN0YW5kLicsXG4gICAgICBhdXRob3I6ICdBYnJhaGFtIExpbmNvbG4sIHR5cGUuZml0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdEaWZmaWN1bHRpZXMgaW5jcmVhc2UgdGhlIG5lYXJlciB3ZSBnZXQgdG8gdGhlIGdvYWwuJyxcbiAgICAgIGF1dGhvcjogJ0pvaGFubiBXb2xmZ2FuZyB2b24gR29ldGhlLCB0eXBlLmZpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRmF0ZSBpcyBpbiB5b3VyIGhhbmRzIGFuZCBubyBvbmUgZWxzZXMnLFxuICAgICAgYXV0aG9yOiAnQnlyb24gUHVsc2lmZXIsIHR5cGUuZml0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCZSB0aGUgY2hpZWYgYnV0IG5ldmVyIHRoZSBsb3JkLicsXG4gICAgICBhdXRob3I6ICdMYW8gVHp1LCB0eXBlLmZpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTm90aGluZyBoYXBwZW5zIHVubGVzcyBmaXJzdCB3ZSBkcmVhbS4nLFxuICAgICAgYXV0aG9yOiAnQ2FybCBTYW5kYnVyZywgdHlwZS5maXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1dlbGwgYmVndW4gaXMgaGFsZiBkb25lLicsXG4gICAgICBhdXRob3I6ICdBcmlzdG90bGUsIHR5cGUuZml0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdMaWZlIGlzIGEgbGVhcm5pbmcgZXhwZXJpZW5jZSwgb25seSBpZiB5b3UgbGVhcm4uJyxcbiAgICAgIGF1dGhvcjogJ1lvZ2kgQmVycmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NlbGYtY29tcGxhY2VuY3kgaXMgZmF0YWwgdG8gcHJvZ3Jlc3MuJyxcbiAgICAgIGF1dGhvcjogJ01hcmdhcmV0IFNhbmdzdGVyLCB0eXBlLmZpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnUGVhY2UgY29tZXMgZnJvbSB3aXRoaW4uIERvIG5vdCBzZWVrIGl0IHdpdGhvdXQuJyxcbiAgICAgIGF1dGhvcjogJ0J1ZGRoYSwgdHlwZS5maXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1doYXQgeW91IGdpdmUgaXMgd2hhdCB5b3UgZ2V0LicsXG4gICAgICBhdXRob3I6ICdCeXJvbiBQdWxzaWZlciwgdHlwZS5maXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1dlIGNhbiBvbmx5IGxlYXJuIHRvIGxvdmUgYnkgbG92aW5nLicsXG4gICAgICBhdXRob3I6ICdJcmlzIE11cmRvY2gsIHR5cGUuZml0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdMaWZlIGlzIGNoYW5nZS4gR3Jvd3RoIGlzIG9wdGlvbmFsLiBDaG9vc2Ugd2lzZWx5LicsXG4gICAgICBhdXRob3I6ICdLYXJlbiBDbGFyaywgdHlwZS5maXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJZb3UnbGwgc2VlIGl0IHdoZW4geW91IGJlbGlldmUgaXQuXCIsXG4gICAgICBhdXRob3I6ICdXYXluZSBEeWVyLCB0eXBlLmZpdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVG9kYXkgaXMgdGhlIHRvbW9ycm93IHdlIHdvcnJpZWQgYWJvdXQgeWVzdGVyZGF5LicsXG4gICAgICBhdXRob3I6ICd0eXBlLmZpdCcsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgaXRlbSA9IHF1b3Rlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdW90ZXMubGVuZ3RoKV07XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGl0ZW0pLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVvdGVzSGFuZGxlcjtcbiJdfQ==