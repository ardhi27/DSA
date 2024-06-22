# arr = ["abc","bcd","aaaa","cbc"]

# indices = []

# # for i in range(len(arr)):
# #     for j in range(len(arr[i])):
# #        if arr[i][j] == "a":
# #            print (i)
# #            break

# for indexWord, indexString in enumerate(arr) :
#     if "a" in indexString:
#         indices.append(indexWord)
# print(indices)
           



numberList = [[1, 2, 3], [4, 5, 6], [7, 8 , 9]]
result = []

for indexRow, indexList in enumerate(numberList):
    if 1 in indexList or 5 in indexList:
        print(indexRow)
        