/**
 * ULTRA - VUEX - SWEETALERT2 - NOTIFICATIONS
 *
 * 1) install sweetalert2 vie npm
 * 2) import css file in app.scss
 * 3) add sweetalert2 into store & set it up in actions
 */
npm install --save sweetalert2


// Sweetalert2
@import "node_modules/sweetalert2/dist/sweetalert2";


import swal from 'sweetalert2'

axios.post('/todosadd', pm)
            .then((response) => {
                swal('Title', 'message', 'success');
            })