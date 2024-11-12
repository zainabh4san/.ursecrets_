import { describe, it, expect } from "vitest";
import { generateWord, gameInfo, makeGuess } from "server_side"

describe('test of generateWord function', () => {

    var outputWords = [
        ["R", "A", "D", "I", "O"],
        ["T", "E", "A", "M", "W", "O", "R", "K"],
        ["W", "E", "B", "D", "E", "S", "I", "G", "N"],
        ["E", "D", "U", "C", "A", "T", "I", "O", "N"],
        ["C", "H", "O", "C", "O", "L", "A", "T", "E"],
        ["U", "N", "I", "V", "E", "R", "S", "I", "T", "Y"]
    ];

    outputWords = JSON.stringify(outputWords);

    it('start score should be zero', () => {    
        generateWord(10);
        expect(gameInfo[10][1]).toBe(0);
    });

    it('generated word should be among possibilities', () => {    
        generateWord(10);
        expect(outputWords).toContain(JSON.stringify(gameInfo[10][0]));
    });

});

describe('test of makeGuess function', () => {

    gameInfo[20] = [["U", "N", "I", "V", "E", "R", "S", "I", "T", "Y"],5];    
    it('test of correct in makeGuess function', () => {
        var attemptWord = ["U", "_ ", "I", "V", "E", "R", "S", "I", "T", "Y"];
        var [correct, num_errors, attemptWord] = makeGuess(20, "N", attemptWord)
        expect(correct).toBe(true);
    });

    it('test of num_errors in makeGuess function', () => {
        var attemptWord = ["U", "_ ", "I", "V", "E", "R", "S", "I", "T", "Y"];
        var [correct, num_errors, attemptWord] = makeGuess(20, "N", attemptWord)
        expect(num_errors).toBe(5);
    });  
    
    it('test of attemptWord in makeGuess function', () => {
        var attemptWord = ["U", "_ ", "I", "V", "E", "R", "S", "I", "T", "Y"];
        var [correct, num_errors, attemptWord] = makeGuess(20, "N", attemptWord)
        expect(JSON.stringify(attemptWord)).toBe(JSON.stringify(gameInfo[20][0]));
    });      

});


