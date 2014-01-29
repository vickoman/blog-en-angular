class NoticesController < ApplicationController
	def index
		render json: Notice.all
	end

	def show
		render json: Notice.find(params[:id])
	end

	def update
		@notice = Notice.find(params[:id]);

		if @notice.update(title: params[:title], content: params[:content])
			render json: @notice, status: :ok
		end
	end

	def create
		@noticia = Notice.new(title: params[:title], content: params[:content])

		if @noticia.save
			render json: @noticia, status: :ok
		else
			render json: @noticia.erros, status: :unprocessable_entity
 		end
	end

	def destroy
		@noticia = Notice.find(params[:id])

		if @noticia.destroy
			render json: Notice.all, status: :ok
		else
			render json: @noticia, status: :unprocessable_entity
		end

		
	end

end
