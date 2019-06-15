/**
 * BACIS - INTER - set interval
 */

<script>
    export default {
        mounted() {
            this.time();
        },
        methods: {
            time() {
                setInterval(() => {
                    console.log("Time is now!");
                }, 1000);
            }
        }
    }


    export default {
        mounted() {
            window.setInterval(() => {
                console.log("Working")
            }, 2000);
        }
    }
</script>