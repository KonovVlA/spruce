import { Interpreter, IToken as Token } from 'spruce';

const DEFAULT_INTERPRETER = new Interpreter({},{});

export function interpret(token: Token){
    return DEFAULT_INTERPRETER.interpret(token);
}
