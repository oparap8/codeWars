function NamedOne(first, last) {
    // -- SHOULD be changed --
        this.firstName = first;
        this.firstPlaceholer = this.firstName;
        this.lastName = last;
        this.lastPlaceholer = this.lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
        if (this.firstName !== this.firstPlaceholer || this.lastName !== this.lastPlaceholer){
          this.fullName = this.firstName + ' ' + this.lastName;
          this.firstPlaceholer = this.firstName;
          this.lastPlaceholer = this.lastName;
        }
    }

let me = new NamedOne('John', 'Doe');
console.log(me.fullName);
me.firstName = 'Jane';
console.log(me.fullName);