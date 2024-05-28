/*  static = keyword that defines properties or methods that belong 
            to a class itself rather than the objects created 
            from that class (class owns anything static, not the object)

            You can make functions and variables!
            pretty much belongs to the class not any object so you can use this feature 
            without creating an object to select it!
*/


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

}


console.log(MathUtil.getDiameter(10))

