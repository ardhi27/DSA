arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12]
n = 6


if len(arr) == 2 * n :
    for i in range(n):
        print(i)
        #dari X1,X2,X3,X4
        if(i == n):
            break
    print("-------------")
    for j in range(n, len(arr)):
        print(j)
