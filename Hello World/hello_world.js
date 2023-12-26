const createGreeting = (name) => {
    return `Hello ${name}`;
};

const defaultName = "World";

const greeting = createGreeting(defaultName);

console.log(greeting);
