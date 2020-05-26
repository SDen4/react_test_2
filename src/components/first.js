import React from 'react';

function First() {
    const text = <p>Text of the first section. Loremloremloremloremloremloremloremloremloremloremloremloremlore</p>;
    return (
        <section className="first">
            <h3>Hello World! (First section)</h3>
            {text}
        </section>
    );
};

export default First;