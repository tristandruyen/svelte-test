<script lang="ts">
    import { Icon, Row, Col, Container, Styles } from "sveltestrap";
    import TodoForm from "./TodoForm.svelte";
    import TodoCard from "./TodoCard.svelte";
    import { todos } from "./stores";
</script>

<main>
    <Container>
        <Row>
            <Col>
                <h2>
                    <Icon name="journal-bookmark-fill" />
                    Todo APP
                </h2>
            </Col>
            <Col sm="2">
                <TodoForm />
            </Col>
        </Row>
        <Row>
            {#each $todos as todo, i}
                <Col xs="6">
                    <div class="mt-3">
                        <TodoCard {todo} />
                    </div>
                </Col>
            {/each}
        </Row>
    </Container>
</main>

<Styles />
