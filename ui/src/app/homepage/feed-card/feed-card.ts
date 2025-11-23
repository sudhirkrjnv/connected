import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-card',
  // imports: [],
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-card.html',
  styleUrl: './feed-card.css'
})
export class FeedCard {
  posts = [
    { 
      id: 1,
      postAuthor: "Sudhir Kumar Patel",
      postTimestamp:"Monday, 12 August 6:40 PM.",
      caption: "My girlfriend prepared a surprise trip for me. I'm so thankful and love her very much. Here are some of the best shots from our trip to Ladakh.", 
      images: [
        {src: 'https://th.bing.com/th/id/R.d58bbce932eb778fa74b6a99c9fe5bf1?rik=1Q%2fCdk6PqTQF3w&riu=http%3a%2f%2fwww.indiatours.net%2fimg%2fplaceholders%2f800x600%2f688725db35a0d99628b6b78a69bb057c.jpg&ehk=tHG6rpOpy9DCPSJds%2fc%2fo7d2hOYFyhFY%2fruxFC78D%2bg%3d&risl=&pid=ImgRaw&r=0'},
        {src: 'https://xiradestinations.com/wp-content/uploads/2020/04/leh88-1536x1024.jpg'},
        {src: 'https://res.cloudinary.com/dyiffrkzh/image/upload/v1706078211/bbj/gcdyyzrb5eeztzntkvpl.jpg'}
      ]
    },
    { 
      id: 2,
      postAuthor: "Rahul Kumar",
      postTimestamp:"Monday, 12 August 6:41 PM.",
      caption: "Had an amazing weekend getaway to the mountains with friends. The fresh air and stunning views were just what we needed to recharge.", 
      images: [
        {src: 'https://th.bing.com/th/id/R.d58bbce932eb778fa74b6a99c9fe5bf1?rik=1Q%2fCdk6PqTQF3w&riu=http%3a%2f%2fwww.indiatours.net%2fimg%2fplaceholders%2f800x600%2f688725db35a0d99628b6b78a69bb057c.jpg&ehk=tHG6rpOpy9DCPSJds%2fc%2fo7d2hOYFyhFY%2fruxFC78D%2bg%3d&risl=&pid=ImgRaw&r=0'},
        {src: 'https://xiradestinations.com/wp-content/uploads/2020/04/leh88-1536x1024.jpg'},
        {src: 'https://res.cloudinary.com/dyiffrkzh/image/upload/v1706078211/bbj/gcdyyzrb5eeztzntkvpl.jpg'}
      ]
    },
  ];
}
