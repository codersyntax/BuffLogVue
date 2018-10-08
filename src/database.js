import blogPost from "@/blogPost.js"
import PostComment from "./comment";
import ContactRequest from "./contactRequest";
import Tag from '@/tag.js'

export default {
    Posts: [
      new blogPost(1, "Sample post with comments", "Derrick Minor", "10/2/2018, 2:44:06 PM", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Tag("fake"), new Tag("sample")], [new PostComment(1, "Sara Farmer", "sarafarmer@dummyemail.com", "Great job!"), new PostComment(2, "Brad Hammond", "bradhammond@dummyemail.com", "Nice blog post!")]),
      new blogPost(2, "Second post in data structure with future date to show sorting", "Derrick Minor", "10/5/2018, 6:12:34 PM", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Tag("test")], []),
      new blogPost(3, "Sample post", "Derrick Minor", "10/2/2018, 12:24:05 AM", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [], []),
    ],
    ContactRequests: [new ContactRequest(1, "Teresa Carter", "tacarter@dummyemail.com", "Hi!")],
    User: []
  }