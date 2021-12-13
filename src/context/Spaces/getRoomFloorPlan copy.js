// Get API call for the floor plan for a specific room

const jsonRequest = {
  userId: 1,
  userToken: "12345",
  spaceId: 1,
  roomId: 1,
};

// THIS FLOOR PLAN IMAGE MAY BE STORED IN S3 BUCKET SO IT WON'T BE JSON RESPONSE
const jsonResponse = {
  // We will need an image for the floor plan
};
