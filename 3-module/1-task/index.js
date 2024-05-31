function namify(users) {
  const arr = [];

  users.map(user => arr.push(user.name));

  return  arr;
}
