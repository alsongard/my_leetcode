import java.util.ArrayList;
import java.util.List;


class Main {
	public static void main(String[] args) {
		ArrayList<Integer> stack = new ArrayList<>();

		int [][] myArray  = { {1,3}, {5,8}, {5,8}, {10,12}}; 

		System.out.println("myArray size: " + myArray.length);
		// System.out.println(myArray);

		if (myArray.length == 0) {
			return;
		}

		for (int i = 0; i < myArray.length; i++) {
			for (int itemInArray : myArray[i]) {
				if (stack.contains(itemInArray)) {
					continue;
				}
				stack.add(itemInArray);
			}
		}

		// create new array of unique values
		List<int[]> newIntervals = new ArrayList<>();

		for (int a = 0; a < stack.size(); a++) {
			newIntervals.add(new int[] {stack.get(a), stack.get(a+1)});
			a++;
		}
		for (int[] item : newIntervals) {
			System.out.print("{");
			int a = 0;
			for (int value : item) {
				System.out.print(value);
				if (a == 0) {
					System.out.print(",");
				}
				a++;
			}
			System.out.print("}");
			System.out.println();
		}

		
	}
}
