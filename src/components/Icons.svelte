<script>
    export let name;
    export let width = '1.5rem';
    export let height = '1.5rem';
    let icons = {
        'check-mark': {
            box: 24,
            svg: `<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"></path></svg>`,
        },
        delete: {
            box: 32,
            svg: `<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path></svg>`,
        },
    };
</script>

<svg {width} {height} viewBox="0 0 {icons[name].box} {icons[name].box}"
    >{@html icons[name].svg}</svg
>
