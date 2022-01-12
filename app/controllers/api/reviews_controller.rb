class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, except: [:index]

    def index
        @reviews = Review.all
        render :index
    end

    def show
      
        @review = Review.find(params[:id])
     
        render :show
    end
    
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: ['You are not the owner of this review!'], status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:body,:rating,:business_id,:user_id)
    end
end
