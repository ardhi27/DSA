def operations(operations):
    x = 0

    op_effect = {
        "++X" : 1,
        "X++" : 1,
        "--X" : -1,
        "X--" : -1
    }

    for operation in operations:
        x += op_effect[operation] # -> x+ = op_effect["++X"] = 1
    return x

        # answer = 0

        # for operation in operations:
        #     if operation in {'X--', '--X'}:
        #         answer -= 1
        #     elif operation in {'X++', '++X'}:
        #         answer += 1
        # return answer
        


result = operations(["--X", "X++", "++X"])
print(result)

