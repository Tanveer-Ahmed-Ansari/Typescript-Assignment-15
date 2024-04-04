// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let invitedFriend: string[] = ["Junaid", "Nasir", "Ajmair", "Kashif"]
 
let notAttend: string = "Ajmair"
console.log(notAttend + " " + "you are not invited for Dinner")

let newFriend: string = "Haider"
invitedFriend[invitedFriend.indexOf(notAttend)] = newFriend
console.log(invitedFriend)

invitedFriend.map((list) =>
console.log(`Dear ${list}, you are invited for Dinner`)
)