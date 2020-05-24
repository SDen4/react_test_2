import React from 'react';

function Second(flag) {
    // console.log(flag);
    const text = <div>Second! Second section</div>;
    return (
        <section className="second">
            {text}
        </section>
    );
};

export default Second;