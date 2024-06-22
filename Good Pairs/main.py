def evaluate_good_pairs(arr) : 

    z = 0

    if len(set(arr)) == 1:
        n = len(arr)
            #Mereturn jika panjang array = nilai set
            #Artinya semua nilai dalam array itu unik.
        z = n * ( n - 1) // 2
        return z
    else:
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                if arr[i] == arr[j] : 
                    z += 1
    
    return z


testArr = [ 1, 1, 1,]
testArr2 = [1, 2, 3]
testArr3 = [1, 2, 3, 2, 1]

print(evaluate_good_pairs(testArr))
print(evaluate_good_pairs(testArr3))