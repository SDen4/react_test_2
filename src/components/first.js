import React from 'react';

function First() {
    const text = <p>Text of the first section. Loremloremloremloremloremloremloremloremloremloremloremloremlore</p>;
    return (
        <section className="first">
            <h3>Hello World! (First section)</h3>
            <div className="testFonts">Test added fonts</div>
            <div className="testFonts2">Тест добавленного шрифта</div>
            {text}
        </section>
    );
};

export default First;