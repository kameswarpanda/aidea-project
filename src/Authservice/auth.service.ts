// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false); // false by default
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  login() {
    this.loggedInSubject.next(true); // User is logged in
  }

  logout() {
    this.loggedInSubject.next(false); // User is logged out
  }

  isLoggedIn() {
    return this.loggedInSubject.asObservable(); // Get the current login state
  }


  private undoStack: any[] = [];
  private redoStack: any[] = [];

  addToUndoStack(state: any): void {
    this.undoStack.push(state);
    this.redoStack = []; // Clear redo stack on new action
  }

  undo(): any | null {
    if (this.undoStack.length > 0) {
      const state = this.undoStack.pop();
      this.redoStack.push(state);
      return state;
    }
    return null;
  }

  redo(): any | null {
    if (this.redoStack.length > 0) {
      const state = this.redoStack.pop();
      this.undoStack.push(state);
      return state;
    }
    return null;
  }

  clearHistory(): void {
    this.undoStack = [];
    this.redoStack = [];
  }
}
