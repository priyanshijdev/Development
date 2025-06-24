Object.freeze() vs Object.seal()


| Feature                | `Object.seal()` | `Object.freeze()` |
| ---------------------- | --------------- | ----------------- |
| Modify existing values | ✅ Allowed       | ❌ Not allowed     |
| Add new properties     | ❌ Not allowed   | ❌ Not allowed     |
| Delete properties      | ❌ Not allowed   | ❌ Not allowed     |



                                          Object.seal(obj)

const obj = { name: "Priyanshi" };
Object.seal(obj);

Cannot add new properties  
Cannot delete properties
=>Can modify existing property values
