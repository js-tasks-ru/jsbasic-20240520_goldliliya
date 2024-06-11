function makeFriendsList(friends) {
  const list = document.createElement('ul');

  for (const friend of friends) {
    const item = document.createElement('li');

    item.textContent = `${friend.firstName} ${friend.lastName}`;
    list.appendChild(item);
  }

  // второй вариант
  // friends.forEach(friend => {
  //   list.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
  // });

  return list;
}
