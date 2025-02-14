const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      {
        content: "Great day at Central Park!",
        timestamp: "2025-01-10T12:00:00",
        likes: 15,
      },
      {
        content: "Loving the vibes in NYC!",
        timestamp: "2023-02-15T08:30:00",
        likes: 8,
      },
      {
        content: "Visited the Statue of Liberty today!",
        timestamp: "2024-05-05T17:45:00",
        likes: 20,
      },
    ],
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      {
        content: "Hiking in the Bay Area!",
        timestamp: "2024-08-12T14:20:00",
        likes: 12,
      },
      {
        content: "Enjoying the sunny weather!",
        timestamp: "2024-02-14T11:10:00",
        likes: 6,
      },
    ],
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      {
        content: "Beach day in LA!",
        timestamp: "2025-02-08T09:45:00",
        likes: 25,
      },
      {
        content: "Exploring Hollywood!",
        timestamp: "2025-01-16T16:55:00",
        likes: 5,
      },
    ],
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      {
        content: "Deep dish pizza is the best!",
        timestamp: "2025-02-11T10:30:00",
        likes: 18,
      },
      {
        content: "Trying out a new jazz club tonight!",
        timestamp: "2025-02-13T20:00:00",
        likes: 3,
      },
    ],
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      {
        content: "Coffee time in the Pacific Northwest!",
        timestamp: "2024-07-09T15:15:00",
        likes: 9,
      },
      {
        content: "Exploring the Olympic National Park!",
        timestamp: "2025-02-14T07:00:00",
        likes: 11,
      },
    ],
  },
];

function analysisData() {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const activeUsers = users.filter((user) => {
    return user.posts.some((post) => new Date(post.timestamp) >= oneWeekAgo);
  });
  const popularPosts = activeUsers.flatMap((user) =>
    user.posts.filter((post) => post.likes >= 10)
  );
  const totalLikes = popularPosts.reduce((sum, post) => sum + post.likes, 0);
  const avgLikes =
    activeUsers.length > 0 ? (totalLikes / activeUsers.length).toFixed(2) : 0;
  return {
    activeUsers: activeUsers.map((user) => user.name),
    popularPosts: popularPosts.map((post) => ({
      content: post.content,
      likes: post.likes,
    })),
    totalLikes,
    avgLikes,
  };
}
console.log(JSON.stringify(analysisData(), null, 2));
