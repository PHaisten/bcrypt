import { Router } from "express";
import Table from "../table";

let router = Router();
let classTable = new Table("Blogs");

router.get("/", (req, res) => {
  console.log("GetBlogs");
  classTable.getAll().then(results => {
    res.send(results);
  });
});

router.get("/:id", (req, res) => {
  console.log("Getting Blog");
  let id = req.params.id;
  classTable.getOne(id).then(results => {
    res.send(results);
  });
});

router.post("/", (req, res) => {
  console.log("posting in server");
  let blog = req.body;
  console.log("blog body", blog);
  classTable.insert(blog).then(results => {
    res.send(results);
  });
});

router.delete("/:id", (req, res) => {
  console.log("Blog Deleting!");
  let id = req.params.id;
  classTable.delete(id).then(results => {
    res.send(results);
  });
  console.log("Deleted Blog!");
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let content = req.body.content;
  console.log(req.body);
  classTable.update(id, title, content).then(results => {
    res.send(results);
  });
  console.log("Updated Blog!");
});

export default router;
