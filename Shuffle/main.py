arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
n = 6
arrResult = []
# if len(arr) == 2 * n:
#     for i in range(n):
#         arrResult.append(arr[i])
#         if i + n < len(arr):  
#             print(arr[n + i])  
#             arrResult.append(arr[ n + i])

#     print(arrResult)
res=[]
for i,j in zip(arr[:n], arr[n:]):
    res += [i,j]
    print(res)