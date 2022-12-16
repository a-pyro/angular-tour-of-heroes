import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(protected messagesService: MessagesService) {}

  getMessages() {
    return this.messagesService.messages;
  }

  hasMessages() {
    return !!this.messagesService.messages.length;
  }

  clearMessages() {
    this.messagesService.clear();
  }
}
