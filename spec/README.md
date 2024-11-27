# Specifications

I'm taking a LOT of inspiration from other languages.

# Basics

## Comments

Comments are done just like in C, with `//` and `/* */`.

## Keywords

```
// core
in
return T
exit uint8
if, else, match
for, while, break, continue

// types (int/uint/float are basically for the architecture's maximum bits)
let, const, as
void, null // void can be used for untyped variables/pointers
bool
int, i8, i16, i32, i64
uint, u8, u16, u32, u64
float, f16, f32, f64
char, string
enum, struct
alias N = T // makes a new type called N based on another type called T
Array<T>
Tuple<...> // ... is substitued with types
Map<K, V> // will be added later
Callable<Tuple<...>, R> // array has arguments, R is return type, ... is substituted with types

// OOP
class, constructor, destructor, extends, implements, abstract
pub, getter, setter, static // access modifiers

// memory management
drop I // I (identifier) is a constant/variable/pointer of any type
alloc N // allocates N amount of bytes, returns a void pointer (taken from C)
typeof I // I (identifier) is a constant/variable/pointer of any type, returns a string
sizeof I // I (identifier) is a constant/variable/pointer of any type, returns a uint (addition of the size of every primitive and struct if its a complex type)

// functions
inline, fn

// modules (same system as js)
export, import, default
```