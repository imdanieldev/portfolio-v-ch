import './App.css'

function App() {

	return (
		<>
			<div class="min-h-svh bg-gray-950 text-white flex justify-center items-center flex-col px-2 text-center">
				<h2 class="text-4xl">Choose one:</h2>
				<div class="flex gap-5 flex-wrap mt-6">
					<a href="http://red.imdanieldev.ir">
						<div class="transition-all bg-red-600 w-14 h-14 flex justify-center items-center rounded-full border-2 border-red-600 border-solid hover:bg-gray-950">Red</div>
					</a>
					<a href="http://green.imdanieldev.ir">
						<div class="transition-all bg-green-600 w-14 h-14 flex justify-center items-center rounded-full border-2 border-green-600 border-solid hover:bg-gray-950">Green</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default App
