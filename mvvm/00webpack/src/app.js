import san from "san";
import {router} from "san-router";
import San from "./demo.san";


console.log("Hello world!");
router.add({rule: "/", Component: San, target: "#app"});

router.start();