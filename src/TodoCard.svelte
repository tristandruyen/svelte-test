<script lang="ts">
    import {
        Icon,
        Button,
        CardBody,
        CardText,
        CardHeader,
        CardFooter,
        CardTitle,
        Card,
    } from "sveltestrap";

    import { todos } from "./stores";
    import type { Todo } from "./types";

    export let todo: Todo;

    function deleteTodoFn(uuid: String) {
        return function deleteTodo() {
            todos.update((todos) => todos.filter((todo) => todo.id != uuid));
        };
    }
</script>

<Card>
    <CardHeader>
        <CardTitle>{todo.title}</CardTitle>
    </CardHeader>
    <CardBody>
        <CardText>{todo.description}</CardText>
    </CardBody>

    <CardFooter>
        <Button on:click={deleteTodoFn(todo.id)}><Icon name="trash" /></Button>
    </CardFooter>
</Card>
