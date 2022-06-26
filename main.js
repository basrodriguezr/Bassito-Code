const $ = selector => document.querySelector(selector);

const $body = $('#body');
const $js = $('#js');
const $css = $('#css');

const magia = () => {
    const body = $body.value;
    const js = $js.value;
    const css = $css.value;
    
    let resultado=
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style type="text/css">
                ${css}
            </style>
        </head>
        <body>
            ${body}
            <script type="text/javascript">
                ${js}
            </script>
        </body>
        </html>
        `

    return resultado;
}

const update = () => {
    const body = magia();
    $('#magia').setAttribute('srcdoc', body);
}

$body.addEventListener('input', e => {
    console.log('si actualizo por aqui: body');
    update();
});

$js.addEventListener('input', e => {
    console.log('si actualizo por aqui: js');
    update();
});

$css.addEventListener('input', e => {
    console.log('si actualizo por aqui: css');
    update();
});

Split({
    columnGutters: [{
        track: 1,
        element: document.querySelector('.vertical-gutter'),
    }],
    rowGutters: [{
        track: 1,
        element: document.querySelector('.horizontal-gutter'),
    }]
})
