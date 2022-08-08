import { render, screen } from '@testing-library/react';
import App from './App'

//스크립트를 변경해서 통과 못하게 만들기!

describe('test입니다', () => {
    test('2+2는 4', () => {
        expect(2 + 2).toBe(4);
    });
    test('3+3는 6', () => {
        expect(3 + 3).toBe(6);
    });
    it('My Agora States 텍스트를 가지고 있어야 한다', () => {
        render(<App />);
        //단순히 가지고 있는 텍스트로 dom에 접근하는 방식인 getByText을 사용
        screen.getByText(/My agora States/i);
    })

    // test('제목은 My agora States이어야 한다', () => {
    // render(<App />);
    // screen.getByText(/My agora States1/i);
    // });
})