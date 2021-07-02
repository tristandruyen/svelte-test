import { writable, Writable } from 'svelte/store';
import type { Todo } from './types'

export const todos: Writable<Todo[]> = writable([]);
