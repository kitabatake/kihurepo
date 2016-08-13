class TesController < ApplicationController
  before_action :set_te, only: [:show, :edit, :update, :destroy]

  # GET /tes
  # GET /tes.json
  def index
    @tes = Te.all
  end

  # GET /tes/1
  # GET /tes/1.json
  def show
  end

  # GET /tes/new
  def new
    @te = Te.new
  end

  # GET /tes/1/edit
  def edit
  end

  # POST /tes
  # POST /tes.json
  def create
    @te = Te.new(te_params)

    respond_to do |format|
      if @te.save
        format.html { redirect_to @te, notice: 'Te was successfully created.' }
        format.json { render :show, status: :created, location: @te }
      else
        format.html { render :new }
        format.json { render json: @te.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tes/1
  # PATCH/PUT /tes/1.json
  def update
    respond_to do |format|
      if @te.update(te_params)
        format.html { redirect_to @te, notice: 'Te was successfully updated.' }
        format.json { render :show, status: :ok, location: @te }
      else
        format.html { render :edit }
        format.json { render json: @te.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tes/1
  # DELETE /tes/1.json
  def destroy
    @te.destroy
    respond_to do |format|
      format.html { redirect_to tes_url, notice: 'Te was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_te
      @te = Te.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def te_params
      params.require(:te).permit(:content, :comment, :kihu)
    end
end
