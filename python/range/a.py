x = 'runoob'
for i in range(len(x)):
    print(i,x[i])

for i in range(10):
    print(i)

for i in range(1,11):
    print(i)

for i in range(0,10,3):
    print(i)

def fact(n):
    if n == 1:
        return 1
    return n * fact(n-1)
print(fact(5))
